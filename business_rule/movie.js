const { default: axios } = require('axios');
const { responseData, responseError } = require('../common/commonFunctions');

const getAllMovieService = async (req, res) => {
  try {
    const { page } = req.query;

    const { data } = await axios.get(
      `${process.env.BASE_URL}/discover/movie?api_key=${process.env.API_KEY}&page=${page}&sort_by=vote_average.desc&vote_count.gte=500`,
    );

    if (!data.results.length) {
      return responseData(res, 404, [], 'Data not found');
    }

    const result = data.results.map((item) => ({
      id: item.id,
      title: item.title,
      overview: item.overview,
      poster_path: item.poster_path,
      popularity: item.popularity,
      release_date: item.release_date,
      vote_average: item.vote_average,
    }));

    return responseData(res, 200, result, 'Success');
  } catch (error) {
    return responseError(res, error);
  }
};

const getMovieByIdService = async (res, movieId) => {
  try {
    // impelementasi cache (memory cache) --> we can use database as well

    if (!global.movies[movieId]) {
      const { data } = await axios.get(
        `${process.env.BASE_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`,
      );

      if (!data) {
        return responseData(res, 404, {}, 'Data not found');
      }

      global.movieId = data;

      return responseData(res, 200, data, 'Success');
    }
    return responseData(res, 200, global.movieId, 'Success');
  } catch (error) {
    return responseError(res, error);
  }
};

module.exports = {
  getAllMovieService,
  getMovieByIdService,
};
