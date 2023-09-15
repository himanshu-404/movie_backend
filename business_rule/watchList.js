const { default: axios } = require("axios");
const { responseData, responseError } = require("../common/commonFunctions");
const WatchList = require("../models/watchList");

const getMyWatchListService = async (req, res) => {
  try {
    const result = await WatchList.find({});

    if (!result.length) {
      return responseData(res, 404, [], "No watch list found");
    }

    return responseData(res, 200, result, "Success");
  } catch (error) {
    return responseError(res, error);
  }
};

const addMovieToWatchListService = async (res, movieId) => {
  try {
    const isMovieExist = await WatchList.findOne({ movie_id: movieId });

    if (isMovieExist) {
      return responseData(res, 409, {}, "Movie already exist in watch list");
    }

    const { data } = await axios.get(
      `${process.env.BASE_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`
    );

    const result = {
      movie_id: data.id,
      movie_data: {
        title: data.title,
        overview: data.overview,
        poster_path: data.poster_path,
        popularity: data.popularity,
        release_date: data.release_date,
      },
    };

    const watchList = await WatchList.create(result);

    return responseData(res, 201, watchList, "movie added to watch list");
  } catch (error) {
    return responseError(res, error);
  }
};

const removeMovieFromWatchListService = async (res, movieId) => {
  try {
    const isMovieExist = await WatchList.findOne({ movie_id: movieId });

    if (!isMovieExist) {
      return responseData(res, 404, {}, "Movie is not in your watch list");
    }

    const removeMovie = await WatchList.findOneAndDelete({ movie_id: movieId });

    return responseData(res, 200, removeMovie, "Movie removed from watch list");
  } catch (error) {
    return responseError(res, error);
  }
};

const updateMovieToWatchListService = async (req, res) => {
  try {
    const { id, isWatched } = req.body;

    const isMovieExist = await WatchList.findOne({ movie_id: id });

    if (!isMovieExist) {
      return responseData(res, 404, {}, "Movie is not in your watch list");
    }

    if (isMovieExist.isWatched === isWatched) {
      return responseData(res, 409, {}, "Movie is already in same state");
    }

    const updateMovie = await WatchList.findOneAndUpdate(
      { movie_id: id },
      { isWatched },
      { new: true }
    );

    return responseData(res, 200, updateMovie, "Movie updated in watch list");
  } catch (error) {
    return responseError(res, error);
  }
};

module.exports = {
  getMyWatchListService,
  addMovieToWatchListService,
  removeMovieFromWatchListService,
  updateMovieToWatchListService,
};
