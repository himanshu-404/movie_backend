const joi = require('joi');
const {
  getAllMovieService,
  getMovieByIdService,
} = require('../business_rule/movie');
const {
  responseError,
  responseInValidArgument,
} = require('../common/commonFunctions');

const getAllMovies = async (req, res) => {
  try {
    // validate query params
    const validateParams = joi.object({
      page: joi.number().required().min(1).max(500)
        .default(1),
    });

    const { error } = validateParams.validate(req.query);

    if (error) {
      return responseInValidArgument(res, error);
    }

    return await getAllMovieService(req, res);
  } catch (error) {
    return responseError(res, error);
  }
};

const getMovieById = async (req, res) => {
  try {
    // validate params
    const validateParams = joi.object({
      id: joi.string().required().min(1).max(500),
    });

    const { error } = validateParams.validate(req.params);

    if (error) {
      return responseInValidArgument(res, error);
    }

    return await getMovieByIdService(res, req.params.id);
  } catch (error) {
    return responseError(res, error);
  }
};

module.exports = {
  getAllMovies,
  getMovieById,
};
