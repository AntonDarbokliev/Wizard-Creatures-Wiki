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

 creatureController.get("/:id/details", async (req, res) => {
  try {
    const creature = await animalService.getById(req.params.id);
    const isOwner = req.user?._id == creature.owner._id
    let hasVoted = false;
    const parsedVotes = JSON.parse(JSON.stringify(creature.votes))
    const idArr = parsedVotes.map(x => x._id)
    console.log(idArr);
    if (idArr.includes(req.user?._id)) {           //CHANGE PROPERTIES ACCORDING TO THE TASK
        hasVoted = true
    }

    const votesString = parsedVotes.map(x => x.email).join(', ')

    res.render("details", {
      title: "Details",
      creature,
      isOwner,
      hasVoted,
      votesString,
      parsedVotes
    });
  } catch (err) {
    const errors = errorHelper(err)
    res.render('details',{
      title : 'Details',
      errors
    });
  }
});


creatureController.get('/:id/vote', isAuthorized,async (req,res) => {
  const creatureId = req.params.id
  const userId = req.user._id 
try{
  
  await animalService.vote(creatureId,userId)
  res.redirect(`/creature/${creatureId}/details`)
}catch(err){
  const errors = errorHelper(err)
  res.render('details',{
    title : 'Details',
    errors,
  })
}
})

  module.exports = creatureController
  