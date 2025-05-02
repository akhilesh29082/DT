// models/MenuItem.js
const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  availability: { type: Boolean, default: true },
  date: { type: Date, default: Date.now } // For daily menu
});

module.exports = mongoose.model('MenuItem', MenuItemSchema);
