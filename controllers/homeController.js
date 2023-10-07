// const { getAll } = require("../services/animalService.js");

const homeController = require("express").Router();

homeController.get("/", async (req, res) => {
  try {
    res.render("home", {
      title: "Home",
      
    });
  } catch (err) {
    // const errors = errorHelper(err)
    // res.render('home',{
    //   title : 'Home',
    //   errors
    // })
    console.log(err);
  }
});

module.exports = homeController;
