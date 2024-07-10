// Create a Schema With Validations for a User
const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: { 
      type: String,
      required: [true, "Name is required"],
      minlength: [2, "Name must be at least 2 characters long"]
    },
    image: { 
      type: String,
      required: [true, "Image is required"],
    },
    nrOfTreasure: { 
      type: Number ,
      required: [true, 'Nr of treasure'],
      min: [1, "Number of treasure must be at least 1"]
    },
    catchPhrase: {
      type: String,
      required: [true, "Catch phrase is required"]
    },
    crewPosition: {
      type: String,
      enum: ["Captain", "First Mate", "Quarter Master", "Boatswain", "Powder Monkey"],
      required: [true, "Crew position is required"] 
    },
    petLeg: {
      type: Boolean,
      default: false
    },
    eyePatch: {
      type: Boolean,
      default: false
    },
    hookHand: {
      type: Boolean,
      default: false
    },
  }, 
{ timestamps: true }
);
const Pirate = mongoose.model("Pirate", PirateSchema);
module.exports = Pirate;

