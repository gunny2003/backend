// api/index.js (or index.js in project root)
require('dotenv').config();
const express = require('express');
const app = express();

// Middleware for parsing requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/login', (req, res) => {
    res.send('<label>Name</label><input type="text"/>');
});

// Export the Express app for Vercel
module.exports = app;