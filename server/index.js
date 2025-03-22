const express = require("express");
const app = express();
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");
const cookieParser = require("cookie-parser");
const Payment = require("./models/paymentModel");
const paymentRoutes = require("./routes/paymentRoutes");

const Razorpay = require("razorpay");

// Make razorpay available globally
global.razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
const PORT = process.env.PORT || 5000; // Default to port 5000 if not set in environment variables

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // ✅ Important for sending cookies
  })
);

// ✅ Use cookie-parser before routes
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoutes);
app.use("/", paymentRoutes);

connectDB();
app.set("socketio", io);
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
