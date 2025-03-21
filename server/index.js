const express = require('express');
const app = express();
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();


app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT;
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
