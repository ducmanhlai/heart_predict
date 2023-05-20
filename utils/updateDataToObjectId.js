import Data from "../models/Data.js";
import mongoose from "mongoose";

const ObjectId = mongoose.Types.ObjectId;

const run = async () => {
    try {
        await mongoose.connect("mongodb+srv://hieule:hieule@cluster0.tnyemed.mongodb.net/heart_predict?retryWrites=true&w=majority");
        console.log("Connected!");

    } catch (error) {
        throw error;
    }

    await Data.updateMany({}, { $set: { userInfo: new ObjectId("644206edaf3edb5a506e9455") } });
    console.log("Updated!");
}

run()