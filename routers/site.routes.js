import express from "express";
import SiteControllers from "../controllers/site_controller.js";

const siteRouter = express.Router();

siteRouter.post("/sendNotification", SiteControllers.sendNotification);

export default siteRouter;
