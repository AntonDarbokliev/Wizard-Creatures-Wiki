const Creature = require("../models/Creature.js");

async function create(animalData, userId) {
  const creature = {
    name: animalData.name,
    species: animalData.species,
    skinColor: animalData.skinColor,
    eyeColor: animalData.eyeColor,                    // CHANGE PROPERTIES ACCORDING TO THE TASK
    imageUrl: animalData.imageUrl,
    description: animalData.description,
    votes: animalData.votes,
    owner: userId,
  };
  const result = await Creature.create(creature);

  return result;
}

async function getAll() {
  return Creature.find({}).lean();
}

async function getById(id) {
  return Creature.findById(id).lean().populate('owner');
}

async function find(location) {
  return Creature.find({ location: { $regex: location, $options: "i" } }).lean();
}

async function edit(id, data) {
  return Creature.updateOne({ _id: id }, { $set: data }, { runValidators: true });
}

async function del(id) {
  return Creature.findByIdAndDelete(id);
}

async function vote(animalId,userId){
  return Creature.findByIdAndUpdate(animalId,{$push : {votes : userId}})    // CHANGE FUNCTION NAME AND PROPERTIES ACCORDING TO THE TASK
}

module.exports = {
  create,
  getAll,
  getById,
  find,
  edit,
  del,
  vote,
};
