import express from "express";
import DataControllers from "../controllers/data_controller.js";
import authenticateToken from "../middlewares/authentication.js";
const dataRouter = express.Router();

dataRouter.post("/create", DataControllers.createData);


export default dataRouter;
