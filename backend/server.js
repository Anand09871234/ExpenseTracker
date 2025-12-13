const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

// Load env vars
dotenv.config({ path: './.env' });

// Route files
const expenses = require('./routes/expenses');
const chatbot = require('./routes/chatbot');
const budgets = require('./routes/Budgets');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Mount routers
app.use('/api/expenses', expenses);
app.use('/api/chatbot', chatbot);
app.use('/api/budgets', budgets);

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server running on port ${PORT}`));