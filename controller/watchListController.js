const {
  getMyWatchListService,
  addMovieToWatchListService,
  removeMovieFromWatchListService,
  updateMovieToWatchListService,
} = require("../business_rule/watchList");
const {
  responseInValidArgument,
  responseError,
} = require("../common/commonFunctions");
const joi = require("joi");

const getMyWatchList = async (req, res) => {
  try {
    return await getMyWatchListService(req, res);
  } catch (error) {
    return responseError(res, error);
  }
};

const addMovieToWatchList = async (req, res) => {
  try {
    const validateBody = joi.object({
      id: joi.string().required().min(1).max(500),
    });

    const { error } = validateBody.validate(req.body);

    if (error) {
      return responseInValidArgument(res, error);
    }

    return await addMovieToWatchListService(res, req.body.id);
  } catch (error) {
    return responseError(res, error);
  }
};

const removeMovieToWatchList = async (req, res) => {
  try {
    const validateParams = joi.object({
      id: joi.number().required(),
    });

    const { error } = validateParams.validate(req.params);

    if (error) {
      return responseInValidArgument(res, error);
    }

    return await removeMovieFromWatchListService(res, req.params.id);
  } catch (error) {
    return responseError(res, error);
  }
};

const updateMovieToWatchList = async (req, res) => {
  try {
    const validateBody = joi.object({
      id: joi.string().required().min(1).max(500),
      isWatched: joi.boolean().required(),
    });

    const { error } = validateBody.validate(req.body);

    if (error) {
      return responseInValidArgument(res, error);
    }

    return await updateMovieToWatchListService(req, res);
  } catch (error) {
    return responseError(res, error);
  }
};

module.exports = {
  getMyWatchList,
  addMovieToWatchList,
  removeMovieToWatchList,
  updateMovieToWatchList,
};
