import Data from "../models/Data.js";

class DataControllers {
  async createData(req, res, next) {
    try {
      const { userInfo, heartRate, SpO2, temp, date } = req.body;
      const newData = await Data.create({
        userInfo,
        heartRate,
        SpO2,
        temp,
        date,
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
