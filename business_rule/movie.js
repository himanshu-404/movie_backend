const { default: axios } = require("axios");
const { responseData, responseError } = require("../common/commonFunctions");

const getAllMovieService = async (req, res) => {
  try {
    const { page } = req.query;

    const { data } = await axios.get(
      `${process.env.BASE_URL}/discover/movie?api_key=${process.env.API_KEY}&page=${page}`
    );

    if (!data.results.length) {
      return responseData(res, 404, [], "Data not found");
    }

    const result = data.results.map((item) => {
      return {
        id: item.id,
        title: item.title,
        overview: item.overview,
        poster_path: item.poster_path,
        popularity: item.popularity,
        release_date: item.release_date,
      };
    });

    return responseData(res, 200, result, "Success");
  } catch (error) {
    return responseError(res, error);
  }
};

const getMovieByIdService = async (req, res) => {
  try {
    const { id } = req.params;

    const { data } = await axios.get(
      `${process.env.BASE_URL}/movie/${id}?api_key=${process.env.API_KEY}`
    );

    if (!data) {
      return responseData(res, 404, [], "Data not found");
    }

    const result = {
      id: data.id,
      title: data.title,
      overview: data.overview,
      poster_path: data.poster_path,
      popularity: data.popularity,
      release_date: data.release_date,
    };

    return responseData(res, 200, result, "Success");
  } catch (error) {
    return responseError(res, error);
  }
};

module.exports = {
  getAllMovieService,
  getMovieByIdService,
};
