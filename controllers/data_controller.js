import mongoose, { Mongoose } from "mongoose";
import Account from "../models/Account.js";
import Data from "../models/Data.js";

class DataControllers {
  async createData(req, res, next) {
    try {
      const { id, heartRate, SpO2, temp } = req.body;
      var currentDate = new Date();

      // Lấy thời gian hiện tại (theo múi giờ UTC)
      var utcTime = currentDate.getTime();
      
      // Tính toán thời gian theo múi giờ GMT+7 (UTC+7)
      var gmt7Time = utcTime + (7 * 60 * 60 * 1000); // 7 giờ * 60 phút * 60 giây * 1000 milliseconds
      
      
      var gmt7Date = new Date(gmt7Time);
      
      const userInfo = await Account.findOne({
        _id: new mongoose.Types.ObjectId(id),
      }).populate("userInfo");
      const newData = await Data.create({
        userInfo,
        heartRate,
        SpO2,
        temp,
        date:new Date(gmt7Date)
      });
      
      res.status(200).json(newData);
    } catch (err) {
      res.json({
        success: false,
        status: err.status,
        message: err.message,
        stack: err.stack,
      });
    }
  }
} 

export default new DataControllers();
