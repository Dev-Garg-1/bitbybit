const express = require('express');
const app = express();
const connectDB = require('./config/db');
const router = require('./routes/authRoutes');
const dotenv = require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/auth', router);

const PORT = process.env.PORT;
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
