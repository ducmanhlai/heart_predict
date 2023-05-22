import mongoose from "mongoose";
import moment from "moment-timezone";
moment.tz.setDefault("Asia/Ho_Chi_Minh");
const DataSchema = new mongoose.Schema({
  userInfo: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  heartRate: {
    type: Number,
    required: true,
  },
  SpO2: {
    type: Number,
    required: true,
  },
  temp: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required:true
  },
});

export default mongoose.model("Data", DataSchema);
