//common syntax for express
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

//calls port from .env file
const PORT = process.env.PORT || 5000;

connectDB();

//middlewares
const app = express();
app.use(express.urlencoded({ extended: false }));

//creating route
app.get("/", (req, res) => {
  //   res.send("Hello");
  res.json({ message: "Welcome to support desk API" });
});

// Routes
// http://localhost:5000/api/users/'userRoute end points'
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
