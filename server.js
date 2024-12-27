const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.json({ status: 'Server is running' });
});

// 'get_msg' route
app.get('/get_msg', (req, res) => {
  res.json({ message: 'Hello, from server' });
});