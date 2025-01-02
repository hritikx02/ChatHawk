const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");

const app = express();

dotenv.config();

connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.status(200).send("API is Running Successfully");
});

// Get all chats
app.get("/api/chat", (req, res) => {
  res.status(200).json(chats);
});

// Get a single chat by ID
app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  if (singleChat) {
    res.status(200).json(singleChat);
  } else {
    res.status(404).json({ message: "Chat not found" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started on PORT ${PORT}`.yellow);
});