import authRouter from "./auth.routes.js";
import dataRouter from "./data.routes.js";
import historyRouter from "./history.routes.js";
import siteRouter from "./site.routes.js";
import predictRouter from "./predicts.js";

function hieu56(app) {
  //viet route trong nay
  app.use("/account", authRouter);
}
const hieuLe = (app) => {
  //viet route trong nay

  app.use("/api/predict", predictRouter);
};
function hoa(app) {
  //viet route trong nay
  app.use("/data", dataRouter);
}
function manh(app) {
  app.use("/history", historyRouter);
}
function route(app) {
  hieu56(app);
  hieuLe(app);
  hoa(app);
  manh(app);
  //API chung
  app.use("/site", siteRouter);
  app.use("/", (req, res) => {
    res.send("Hello");
  });
}

// module.exports = route;
export default route;
