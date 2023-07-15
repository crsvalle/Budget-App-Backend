// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const transactionController = require("./controllers/transactionsController")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON
app.use(cors());

//ROUTES
app.use("/transactions", transactionController);
app.get("/", (req, res) => {
    res.send("Welcome to the Budget app");
  });


  // 404 PAGE
app.get("*", (req, res) => {
    res.json({ error: "Page not found" });
  });

// EXPORT
module.exports = app;