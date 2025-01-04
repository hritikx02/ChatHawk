const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");

const app = express();

dotenv.config();
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.status(200).send("API is Running Successfully");
});

app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started on PORT ${PORT}`.yellow);
});