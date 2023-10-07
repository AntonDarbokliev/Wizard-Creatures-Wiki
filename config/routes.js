const cookieParser = require("cookie-parser");
const homeController = require("../controllers/homeController.js");
const userController = require("../controllers/userController.js");
module.exports = (app) => {
  app.use(cookieParser())
  app.use(homeController);
  app.use("/user", userController);

};
