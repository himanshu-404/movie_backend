const responseError = (res, error) => {
  return res.status(500).json({
    data: null,
    status: false,
    message: error.message || "Internal Server Error",
  });
};

const responseData = (
  res,
  statusCode,
  data,
  message = null,
  rowsCount = undefined
) => {
  return res.status(statusCode).json({
    data: data,
    status: true,
    message: message || "Ok",
    rowsCount: rowsCount,
  });
};

module.exports = { responseError, responseData };
