import { sendResult } from "../utils/mail.js";
import Account from "../models/Account.js";
class SiteControllers {
  //[GET] /site
  index(req, res) {
    return res.send(message({ data: "Hello world" }));
  }

  //[POST] /site/sendNotification
  async sendNotification(req, res, next) {
    let { username, bmp, spo2, temp, text, dateTest } = req.body;
    // check valid email
    try {
      const user = await Account.findOne({ email: username });

      if (!user) {
        return res.status(200).json({
          status: false,
          message: "Email không đúng!",
          data: {},
        });
      }

      if (text == "") {
        if (bmp > 100) text = "Nhịp tim tăng cao\n";
        else if (bmp < 60) text = "Nhịp tim xuống thấp\n";

        if (spo2 < 90)
          text += "Tình trạng thiếu oxy trong máu tương đương với suy hô hấp";
        else if (spo2 < 95)
          text += "có thể gặp phải tình trạng thiếu oxy trong máu";

        if (temp < 36.3) text += "Thân nhiệt xuống thấp";
        else if (temp > 37.1) text += "Thân nhiệt lên cao";
      }

      const rs = await sendResult(username, bmp, spo2, temp, dateTest, text);
      if (rs.response.includes("OK")) {
        return res.status(200).json({
          status: true,
          message: "Đã gửi mail dự đoán sức khỏe tới: " + username,
          data: {},
        });
      }
    } catch (error) {
      return res.status(200).json({
        status: false,
        message: "Lỗi",
        data: { error },
      });
    }
  }
}
export default new SiteControllers();
