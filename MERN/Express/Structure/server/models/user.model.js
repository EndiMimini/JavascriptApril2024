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
      maxlength: [250, "Last name must be less than 250 characters long"]
    },
    age: { 
      type: Number ,
      min: [1, "You must be at least 1 year or older to register"],
      max: [150, "You must be at most 149 years to register"]
    },
    email: {
      type: String,
      required: [true, "Email is required"] 
    }
  }, 
{ timestamps: true }
);
const User = mongoose.model("User", UserSchema);
module.exports = User;
