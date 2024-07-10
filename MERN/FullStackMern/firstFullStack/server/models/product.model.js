// Create a Schema With Validations for a User
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
      type: String,
      required: [true, "Title is required"],
      minlength: [2, "Title must be at least 2 characters long"]
    },
    description: { 
      type: String,
      required: [true, "Description is required"],
      minlength: [2, "Description must be at least 2 characters long"],
      maxlength: [255, "Description must be less than 255 characters long"]
    },
    price: { 
      type: Number ,
      required: [true, 'Price is required'],
      min: [1, "Price must be at least $1"]
    },
    image: {
      type: String,
      required: [true, "Image is required"] 
    },
    likes: {
      type: Number,
      default: 0
    },
    views: {
      type: Number,
      default: 0
    }
  }, 
{ timestamps: true }
);
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;

