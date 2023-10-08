const { Schema, Types, model, default: mongoose } = require("mongoose");

const creatureSchema = new Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },              //ADJUST PROPERTIES ACCORDING TO THE TASK
  skinColor: { type: String, required: true },
  eyeColor: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  votes: [
    {
      type: Types.ObjectId,
      ref: "User",
    },
  ],
  owner: { type: Types.ObjectId , ref : 'User'},
});

const Creature = model('Creature', creatureSchema)
module.exports = Creature  