const express = require("express");
const router = express.Router();

// import movie controllers
const {
  getMyWatchList,
  addMovieToWatchList,
  removeMovieToWatchList,
  updateMovieToWatchList,
} = require("../controller/watchListController");

// use all routes
router
  .route("/")
  .get(getMyWatchList)
  .post(addMovieToWatchList)
  .put(updateMovieToWatchList);

router.route("/:id").delete(removeMovieToWatchList);

module.exports = router;
