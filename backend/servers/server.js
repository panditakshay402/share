// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1/auth', require('./routes/userRoutes'));

// Port
const port = process.env.PORT || 8080;

// Listen
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
