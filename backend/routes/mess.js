// routes/mess.js
const express = require('express');
const router = express.Router();
const MessSubscription = require('../models/MessSubscription');

// Add mess subscription
router.post('/', async (req, res) => {
  try {
    const subscription = new MessSubscription(req.body);
    const saved = await subscription.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Failed to save subscription' });
  }
});

// Get all subscriptions (admin view)
router.get('/', async (req, res) => {
  try {
    const subs = await MessSubscription.find().populate('student');
    res.json(subs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch subscriptions' });
  }
});

// Get mess ending soon (optional endpoint)
router.get('/expiring', async (req, res) => {
  try {
    const today = new Date();
    const threeDays = new Date();
    threeDays.setDate(today.getDate() + 3);
    const expiring = await MessSubscription.find({ endDate: { $lte: threeDays } });
    res.json(expiring);
  } catch (err) {
    res.status(500).json({ error: 'Failed to check expiry' });
  }
});

module.exports = router;
