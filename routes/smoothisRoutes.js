const express = require("express");
const blogController = require("../controllers/blogController");

const srouter = express.Router();

srouter.get("/createSmoothie", (req, res) => {
  res.render();
});

module.exports = srouter;
