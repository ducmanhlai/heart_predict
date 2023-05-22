import express from "express";
import { predict } from "../controllers/predict_controller.js";

const router = express.Router();

router.post("/data/:userid", predict)
export default router;


