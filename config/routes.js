const cookieParser = require("cookie-parser");
const homeController = require("../controllers/homeController.js");
const userController = require("../controllers/userController.js");
const { auth } = require("../middlewares/authMiddleware.js");
module.exports = (app) => {
  app.use(cookieParser())
  app.use(auth)
  app.use(homeController);
  app.use("/user", userController);

};
