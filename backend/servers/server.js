const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
// const chalk = require('chalk');

// Load environment variables
dotenv.config();

// Connect to MongoDB
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use("", (req, res) => {
    res.status(200).json({ 
        success: true,
        message: 'Hello World' });
});

// Port
const port = process.env.PORT || 8080;

// listen
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});