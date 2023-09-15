const mongoose = require("mongoose");
const { Mixed, String, Boolean } = mongoose.Schema.Types;

const whatchListSchema = mongoose.Schema(
  {
    movie_id: {
      type: String,
      required: true,
      unique: true,
    },
    isWatched: {
      type: Boolean,
      required: true,
      default: false,
    },
    movie_data: {
      type: Mixed,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const WatchList = new mongoose.model("watchList", whatchListSchema);
module.exports = WatchList;
