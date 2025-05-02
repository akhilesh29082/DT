// models/Order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      name: String,
      quantity: Number
    }
  ],
  pickupTime: String,
  paymentMethod: String,
  orderDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
