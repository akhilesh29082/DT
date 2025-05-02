// routes/menu.js
const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// Create a new menu item
router.post('/', async (req, res) => {
  try {
    const newItem = new MenuItem(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create menu item' });
  }
});

// Get today's menu items
router.get('/', async (req, res) => {
  try {
    const items = await MenuItem.find({ date: { $gte: new Date().setHours(0, 0, 0, 0) } });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch menu' });
  }
});

// Update a menu item
router.put('/:id', async (req, res) => {
  try {
    const updated = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update menu item' });
  }
});

// Delete a menu item
router.delete('/:id', async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete menu item' });
  }
});

module.exports = router;
