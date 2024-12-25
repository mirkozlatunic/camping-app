const mongoose = require('mongoose');
const express = require('express');

const app = express();

mongoose.connect('mongodb://localhost:27017/test');

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
