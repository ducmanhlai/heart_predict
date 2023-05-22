import mongoose, { Mongoose } from "mongoose";
import Account from "../models/Account.js";
import Data from "../models/Data.js";

class DataControllers {
  async createData(req, res, next) {  
    try {
      const { id, heartRate, SpO2, temp } = req.body;
      // const dateAdded = new Date().toISOString();      
      const userInfo = await Account.findOne({ _id: new mongoose.Types.ObjectId(id)}).populate("userInfo");
      const newData = await Data.create({
        userInfo,
        heartRate,
        SpO2,
        temp        
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

  async getLatestData(req, res) {
    try {
      const data = await Data.findOne({ userInfo: req.params.id });
      res.status(200).json(data);
    } catch (err) {
      return res.json({
        success: false,
        status: err.status,
        message: err.message,
        stack: err.stack,
      });
    }
  }
}

export default new DataControllers();
