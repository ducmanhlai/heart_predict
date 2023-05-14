import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import route from "./routers/index.js";
// Lấy đường dẫn của thư mục mà file javascript hiện tại đang được thực thi
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express();
const port = 8080;
dotenv.config();

// cấu hình body-paser 
// Được dùng để phân tích các thông tin được nhập từ biểu mẫu và lưu chúng vào req.body
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());

// Cung cấp các tài nguyên tĩnh (HTML, CSS, hình ảnh, ...) từ thư mục public cho các yêu cầu HTTP được gửi từ trình duyệt
// VD: Khi client gửi yêu cầu HTTP: http://dudoanbenhtim/change_password/... đến server thì server sẽ gửi tài nguyên tĩnh
// form đổi mật khẩu đến cho client. Khác với việc gọi api, api chỉ được gọi khi thực hiện các thao tác về dữ liệu với server.
app.use(express.static(path.join(__dirname, "/public")));
app.use(
  cors({
    origin: "*",
  })
);

route(app);

app.use((err, req, res, next) => {

  const errStatus = err.status || 500;
  const errMessage = err.message || "Lỗi không xác định !";

  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });

});

const connect = async () => {
  try {
    mongoose.connect(process.env.CONNECT_STRING);
    console.log("Connected to database!");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("Database disconnected!");
});

app.listen(port, () => {
  connect();
  console.log("Connected to server!");
});
