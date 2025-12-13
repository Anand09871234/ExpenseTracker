const express = require('express');
const router = express.Router();
const Budget = require('../models/Budget');

// @desc    Get all budgets
// @route   GET /api/budgets
router.get('/', async (req, res) => {
    try {
        const budgets = await Budget.find();
        res.json({ success: true, data: budgets });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

// @desc    Set or Update a budget
// @route   POST /api/budgets
router.post('/', async (req, res) => {
    try {
        const { category, limit } = req.body;
        // Upsert: Update if exists, Create if not
        const budget = await Budget.findOneAndUpdate(
            { category },
            { limit },
            { new: true, upsert: true } 
        );
        res.status(201).json({ success: true, data: budget });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

module.exports = router;