const { isAuthorized } = require("../middlewares/authMiddleware.js");
const animalService = require("../services/animalService.js");

const creatureController = require("express").Router();


creatureController.get("/create",isAuthorized, (req, res) => {
    res.render("create", {
      title: "Add creature",
    });
  });

creatureController.post("/create",isAuthorized, async (req, res) => {
    try {
      await animalService.create(req.body,req.user._id);
      res.redirect("/");
    } catch (err) {
      const errors = errorHelper(err)
      res.render('create',{
        title : 'Create',
        errors
      });
    }
  });

  creatureController.get("/catalog", async (req, res) => {
    try {
      const creatures = await animalService.getAll();
      res.render("all-posts", {
        title: "Creature Posts",
        creatures,
      });
    } catch (err) {
      res.render("all-posts", {
        title: "Creature Posts",
      });
    }
  });

  module.exports = creatureController
  