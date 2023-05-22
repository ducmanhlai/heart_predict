import authenticateToken from "../middlewares/authentication.js";
import HistoryController from "../controllers/history_controller.js";
import express from "express";
const historyRouter = express.Router();
// historyRouter.post("/create",authenticateToken,HistoryController.createHistory);
historyRouter.get("/get/nearest",authenticateToken,HistoryController.getNearestHistory);
historyRouter.get("/get/predict",authenticateToken,HistoryController.getHistoryPredict);
historyRouter.get("/get",authenticateToken,HistoryController.getHistory);
export default historyRouter;