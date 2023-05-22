import express from "express";
import DataControllers from "../controllers/data_controller.js";
import authenticateToken from "../middlewares/authentication.js";
const dataRouter = express.Router();

dataRouter.get("/latest/:id", authenticateToken, DataControllers.getLatestData);
dataRouter.post("/create", authenticateToken, DataControllers.createData);

export default dataRouter;
