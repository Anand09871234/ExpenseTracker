const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    unique: true // One budget per category
  },
  limit: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Budget', BudgetSchema);