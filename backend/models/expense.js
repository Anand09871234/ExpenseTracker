const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  description: {
    type: String,
    trim: true,
    required: [true, 'Please add a description'],
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive number'],
  },
  category: {
    type: String,
    trim: true,
    required: [true, 'Please add a category'],
  },
  isRecurring: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Expense', ExpenseSchema);