const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

dotenv.config();
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Health check route
app.get("/", (req, res) => {
  res.status(200).send("API is Running Successfully");
});

app.use('/api/user', userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started on PORT ${PORT}`.yellow);
});