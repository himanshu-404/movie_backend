const express = require("express");
const router = express.Router();

// import all routes
const movie = require("./movie");
const watchlist = require("./watchList");

// use all routes
router.use("/movie", movie);
router.use("/watchlist", watchlist);

module.exports = router;
