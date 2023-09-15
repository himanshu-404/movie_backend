const express = require("express");
const router = express.Router();

// import watchList controllers
const {
  getAllMovies,
  getMovieById,
} = require("../controller/moviesController");

// use all routes
router.get("/", getAllMovies);
router.get("/:id", getMovieById);

module.exports = router;
