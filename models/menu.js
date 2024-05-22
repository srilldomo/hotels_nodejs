const mongoose = require("mongoose");

const MenuScehma = new mongoose.Schema({
  Dishname: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  taste: {
    type: String,
    enum: ["sweet", "spicy", "sour"],
    required: true,
  },
  is_drink:{
    type:Boolean,
    default:false 
  },
  ingredients:{
    type:[String],
default:[]
  }
});

const Menu = mongoose.model("menu",MenuScehma)

module.exports = Menu
