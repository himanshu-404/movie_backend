const express = require("express");
const router = express.Router();

// import all routes
const movie = require("./movie");

// use all routes
router.use("/movie", movie);

module.exports = router;
