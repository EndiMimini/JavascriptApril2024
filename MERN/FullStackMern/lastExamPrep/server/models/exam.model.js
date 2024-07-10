// Create a Schema With Validations for a User
const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
    title: { 
      type: String,
      required: [true, "Title is required"],
      minlength: [2, "Title must be at least 2 characters long"]
    },
    description: { 
      type: String,
      required: [true, "Description is required"],
      minlength: [2, "Description be at least 2 characters long"]
    },
    draft: {
      type: Boolean,
      default: true
    },
    posted: {
      type: Boolean,
      default: false
    },
    archived: {
      type: Boolean,
      default: false
    },
  }, 
{ timestamps: true }
);
const Exam = mongoose.model("Exam", ExamSchema);
module.exports = Exam;

