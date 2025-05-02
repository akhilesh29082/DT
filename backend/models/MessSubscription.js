// models/MessSubscription.js
const mongoose = require('mongoose');

const MessSubscriptionSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  meals: [String], // e.g., ["Breakfast", "Lunch", "Dinner"]
  mobileNumber: { type: String, required: true }
});

module.exports = mongoose.model('MessSubscription', MessSubscriptionSchema);
