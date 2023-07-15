const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions.js")
const { validateURL } = require("../models/validation.js");

transactions.get("/" , (req,res) =>{
    res.json(transactionsArray)
})

// SHOW
transactions.get("/:arrayIndex", (req, res) => {
    if (transactionsArray[req.params.arrayIndex]) {
      res.json(transactionsArray[req.params.arrayIndex]);
    } else {
      res.status(404).redirect('/');
    }
  });

// CREATE
transactions.post("/", validateURL, (req, res) => {
    transactionsArray.push(req.body);
    res.json(transactionsArray[transactionsArray.length - 1]);
  });

// DELETE
transactions.delete("/:indexArray", (req, res) => {
  if (transactionsArray[req.params.indexArray]) {
    const deletedlog = transactionsArray.splice(req.params.indexArray, 1);
    res.status(200).json(deletedlog);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

// UPDATE
transactions.put("/:arrayIndex", validateURL, async (req, res) => {
  if (transactionsArray[req.params.arrayIndex]) {
    transactionsArray[req.params.arrayIndex] = req.body;
    res.status(200).json(transactionsArray[req.params.arrayIndex]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

module.exports = transactions;