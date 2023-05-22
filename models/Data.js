import mongoose from "mongoose";


const DataSchema = new mongoose.Schema(
    {
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
            default: new Date()
            
        }
    });

export default mongoose.model("Data", DataSchema);