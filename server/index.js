const express = require('express');
const app = express();
const connectDB = require('./config/db');
const router = require('./routes/authRoutes');
const dotenv = require('dotenv').config();

const cors = require("cors")
const http = require('http');
const socketIo = require('socket.io');
const projectRoutes = require('./routes/projects');
const requestRoutes = require('./routes/requests');

const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: 'http://localhost:5173', methods: ['GET', 'POST'] }
});
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use('/api/requests', requestRoutes);

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use('/api/auth', router);



connectDB();
app.set('socketio', io);
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
