import User from "../models/User.js"
import Data from "../models/Data.js"
import History from "../models/History.js";
import docterBot from "../docterbot/docterBot.js";
import { randomPredictData } from "../utils/randomPredictData.js";
import { createError } from "../utils/createError.js";

// Tự động predict trong ngày
// Khi bấm nút: Tiến hành lấy dữ liệu từ trước cho đến khi bấm nút

export const predict = async (req, res, next) => {

    const userId = req.params.userid;
    // timeStamp chính là dấu thời gian từ lúc bấm nút dự đoán.
    const timeStamp = req.body.timeStamp;
    // Tạo ra 2 biến startOfTimeStamp và endOfTimeStamp để lần lượt thể hiện thời điểm từ 0h đến h của timeStamp.
    // Thể hiện thời gian bắt đầu mốc thời gian timeStamp (00:00:00:0000).
    const startOfTimeStamp = new Date (new Date(timeStamp).setUTCHours(0, 0, 0, 0));
    // Thể hiện thời gian kết thúc mốc thời gian timeStamp.
    const endOfTimeStamp = new Date(timeStamp);
    console.log(userId);
    console.log(startOfTimeStamp);
    console.log(endOfTimeStamp);

    try {
        // B1: Xử lý dữ liệu từ client.
        // B1.1: Truy vấn thông tin của user dựa trên id user.
        const userStat = await User.findById(userId);
        // B1.2: Truy vấn data cảm biến dựa trên id user.
        const userData = await Data.find({
            userInfo: userId,
            $and: [
                { date: { $gte: startOfTimeStamp } },
                { date: { $lte: endOfTimeStamp } }
            ],
        });
        console.log(userStat);
        // console.log(userData);
        // console.log(userStat && userData.length > 0)

        // Nếu hai biến userStat và userData có dữ liệu thì mới xử lý bước tiếp theo. Nếu không thì báo lỗi.
        if (userStat && userData.length > 0) {
            // B1.3: Trích xuất dữ liệu và tiến hành xử lý dữ liệu
            // Trích xuất dữ liệu chỉ số từ userStat
            const { gender, birthDay, height, weight, ...otherDetails } = userStat._doc;

            // Tạo ra một mảng chứa các đối tượng date từ thuộc tính date của userData.
            // const date = userData.map(({ date }) => date);
            // Từ mảng date, kết hợp từng phần tử của nó lần lượt với các thuộc tính heartRate, SpO2, temp để tạo ra các mảng
            // đối tượng heartRate, SpO2, temp.
            const [hrValues, spO2Values, tempValues] = await Promise.all([
                userData.map((data) => (data.heartRate)),
                userData.map((data) => (data.SpO2)),
                userData.map((data) => (data.temp)),
            ]);
            console.log("HeartRate: ", hrValues);
            console.log("SpO2: ", spO2Values);
            console.log("Temparatured: ", tempValues);

            // B2: Tính toán dữ liệu từ các mảng dữ liệu trên.
            // B2.1: Tính tuổi:
            // Chuyển kiểu dữ liệu của birthDay từ String thành Date:
            const brthDay = new Date(birthDay);
            console.log(brthDay);
            // Lấy ngày hiện tại.
            const currentDate = new Date();
            // Tính sự chênh lệch giữa hai mốc thời gian (đơn vị miliseconds).
            const diffTime = Math.abs(currentDate - brthDay)
            // Quy đổi từ số miliseconds thành số ngày.
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
            // Quy đổi từ số ngày thành số năm (tuổi).
            const age = Math.floor(diffDays / 365)

            // B2.2: Quy đổi giới tính thành hai số nguyên: 0, 1.
            const lowerCaseGender = gender.toLowerCase();
            const sex = lowerCaseGender === "nam" ? 0 : 1;

            // B2.3: Xử lý trtbps -> suy ra từ spO2 trên cơ sở nếu huyết áp thấp thì lượng oxy cũng thấp.
            /*  
                Mức SpO2 bình thường nằm trong khoảng 95-100%.
                Mức SpO2 dưới 90% được xem là thấp và có thể cho thấy rối loạn hô hấp hoặc sự suy giảm hoạt động của tim.
                Người bị bệnh phổi tắc nghẽn mạn tính hoặc bệnh tiểu đường, mức SpO2 bình thường có thể dao động trong khoảng 90-95%. 
            */
            // Tính trung bình cộng tất cả các giá trị có trong mảng giá trị nồng độ Oxy.
            const averSpO2 = Math.round((spO2Values.reduce((sum, curr) => sum + curr, 0)) / spO2Values.length);
            console.log(averSpO2);
            // Quy đổi:
            /*
                Mức trtbps bình thường là từ 90 đến 119 mmHg.
                Mức trtbps bất thường là từ 120 đến 200 mmHg.
            */
            let trtbps;
            switch (true) {
                case (averSpO2 >= 95 && averSpO2 <= 100):
                    trtbps = randomPredictData(90, 119)
                    break;
                case (averSpO2 >= 80 && averSpO2 < 95):
                    trtbps = randomPredictData(120, 200)
                    break;
                default:
                    trtbps = 0;
                    break;
            }

            // B2.4: Xử lý cholesterol -> suy ra từ chiều cao và cân nặng trên cơ sở chỉ số BMI cao khiến cho lượng cholesterol xấu cao.
            /* 
                Dưới 18.5: Gầy.
                Từ 18.5 đến 24.9: Bình thường.
                Từ 25.0 đến 29.9: Hơi béo.
                Từ 30.0 đến 34.9: Béo phì độ I.
                Từ 35.0 đến 39.9: Béo phì độ II.
                Trên 40.0: Béo phì độ III.
            */
            // Chuẩn hoá lại thông tin
            const w = parseFloat(weight);
            const h = parseFloat(height);
            // Tính chỉ số bmi từ chiều cao và cân nặng và chuẩn hoá
            const bmi = parseFloat((w / ((h / 100) ** 2)).toFixed(2));
            // Quy đổi:
            /* 
                Chỉ số cholesterol ở người bình thường luôn duy trì mức 170mg/dL, đạt giới hạn ở mức 199mg/dL.
                Chỉ số cholesterol ở mức 200-239 mg/dL (5.2-6.2 mmol/L) được xem là tăng nguy cơ.
                Chỉ số cholesterol ở mức 240 mg/dL (6.2 mmol/L) trở lên được xem là nguy hiểm.
            */
            let chol;
            switch (true) {
                case (bmi >= 30 && bmi <= 34.9):
                    chol = randomPredictData(200, 239)
                    break;
                case (bmi >= 35 && bmi <= 39.9):
                    chol = randomPredictData(240, 299)
                    break;
                case (bmi >= 40):
                    chol = randomPredictData(300, 350)
                    break;
                default:
                    chol = randomPredictData(170, 199);
                    break;
            }

            // B2.5: Xử lý nhịp tim.
            // Tính trung bình cộng các giá trị số đo nhịp tim từ mảng số đo nhịp tim.
            const averHR = Math.round((hrValues.reduce((sum, curr) => sum + curr, 0) / hrValues.length));
            // Quy đổi.
            const thalachh = averHR ? averHR : 0;
            console.log(thalachh);

            //B2.6: Xử lý nhiệt độ.
            // Tính trung bình cộng giá trị nhiệt độ.
            const averTemp = Math.round((tempValues.reduce((sum, curr) => sum + curr, 0) / tempValues.length));
            console.log(averTemp);

            // B3: Lưu lại dữ liệu đã được xử lý thành công.
            const data = {
                age: age,
                sex: sex,
                cp: req.body.cp,
                trtbps: trtbps,
                chol: chol,
                fbs: req.body.fbs || -1,
                restecg: req.body.restecg || -1,
                thalachh: thalachh,
                exng: req.body.exng,
                oldpeak: req.body.oldpeak || -1,
            }

            // B4: Gửi mẫu dữ liệu data đến cho model AI để chuẩn đoán và nhận phản hổi.
            const result = await docterBot(data, next);
            console.log(parseInt(result));

            // B5: Lưu kết quả dự đoán vào History và lưu lại History vào User.
            // Kiểm tra xem bác sĩ có đang đi làm không.
            const isDocterWorking = result !== -1 ? true : false;
            if (isDocterWorking) {
                // Chuẩn hoá kết quả chuẩn đoán.
                var isHealthy = parseInt(result) === 0 ? true : false;
                // Tạo mới một req là req.history để truyền dữ liệu cho đối tượng mongoDB.
                req.history = { heartBeat: averHR, oxygen: averSpO2, temp: averTemp, isHealthy: isHealthy }
                // Tạo mới một đối tượng History với tham số truyền vào là req.history.
                const newHistory = new History(req.history);
                try {
                    // Lưu vào mongoDB.
                    const savedHistory = await newHistory.save();
                    // Lưu vào thuộc tính history của User.
                    await User.findByIdAndUpdate(
                        userId,
                        { $push: { history: savedHistory._id } },
                    )
                    // Tạo một thông báo là đã lưu.
                    var saveMessage = "Saved to history!"
                } catch (err) {
                    next(err);
                }
            } else {
                next(createError(500, "DocterBot is not found!"));
            }

            // B6: Gửi kết quả dự đoán đến cho client.
            const docterMessage = isHealthy ? "Tim ban dang khoe manh" : "Ban co nguy co mac benh tim";
            res.status(200).json(
                {
                    dataPredict: data,
                    isHealthy: isHealthy,
                    docterSaid: docterMessage,
                    historyResponse: saveMessage,
                }
            );

        }
        else {
            next(createError(500, "Can't found the user datas!"));
        }

    } catch (err) {
        next(err)
    }
}
