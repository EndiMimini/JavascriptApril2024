// Create a Schema With Validations for a User
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: { 
      type: String,
      required: [true, "First name is required"],
      minlength: [2, "First name must be at least 2 characters long"]
    },
    last_name: { 
      type: String,
      required: [true, "Last name is required"],
      minlength: [2, "Last name must be at least 2 characters long"],
      maxlength: [20, "Last name must be less than 20 characters long"]
    },
    age: { 
      type: Number ,
      required: [true, 'Age is required'],
      min: [1, "You must be at least 1 year or older to register"],
      max: [150, "You must be at most 149 years to register"]
    },
    email: {
      type: String,
      required: [true, "Email is required"] 
    },
    under18: {
      type: Boolean,
      required: [true, "Please select one option"],
    },
  }, 
{ timestamps: true }
);
const User = mongoose.model("User", UserSchema);
module.exports = User;

