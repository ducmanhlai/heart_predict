import Account from "../models/Account.js";
import Data from "../models/Data.js";
import History from "../models/History.js";
import User from "../models/User.js";
class HistoryController {
  async getHistory(req, res, next) {
    const data = await Data.find({userInfo:req.body._doc._id});
    res.status(200).json({
      status: true,
      message: "Thành công",
      data: data,
    });
  }
  async getNearestHistory(req, res, next) {
    const time = 24;
    const data = await Data.find({
      date: { $gt: new Date(Date.now() - time * 60 * 60 * 1000) },
      userInfo: req.body._doc._id,
    }).sort({'date':-1});
    const grouped = data.reduce((acc, curr) => {
      const hour = curr.date.getUTCHours();
      acc[hour] = [...(acc[hour] || []), curr];
      return acc;
    }, {});
    const result = [];
    for (let i of Object.keys(grouped)) {
      let totalHeart = 0,
        totalSpO2 = 0,
        totalTemp = 0;
      grouped[i].forEach((element) => {
        totalHeart += element.heartRate;
        totalSpO2 += element.SpO2;
        totalTemp += element.temp;
      });
      result.push({
        heartRate: totalHeart / grouped[i].length,
        spO2: totalSpO2 / grouped[i].length,
        temp: totalTemp / grouped[i].length,
        hour: i,
      });
    }
    res.status(200).json({
      status: true,
      message: "Thành công",
      data: data,
    });
  }
 
  async getHistoryPredict(req,res){
    const userStat = await User.findOne({
      _id: req.body._doc.userInfo._id,
    });
    // .slice(Number(page)*10-10,Number(page)*10)
    var page= req.query.page || 1;
    const data = await History.find({ _id: { $in: userStat.history } });
    res.status(200).json({
      status: true,
      message: "Thành công",
      data: data,
    });
  }
}

export default new HistoryController();
