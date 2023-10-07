const cookieParser = require("cookie-parser");
const homeController = require("../controllers/homeController.js");
module.exports = (app) => {
  app.use(cookieParser())
  app.use(homeController);
};
