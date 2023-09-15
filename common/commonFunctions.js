const responseError = (res, error) => {
  // to handle error from axios
  if (error.response && error.response.data) {
    return res.status(error.response.status).json({
      data: null,
      status: false,
      message: error.response.data.status_message || 'Internal Server Error',
    });
  }

  return res.status(500).json({
    data: null,
    status: false,
    message: error.message || 'Internal Server Error',
  });
};

const responseData = (
  res,
  statusCode,
  data,
  message = null,
  rowsCount = undefined,
) => res.status(statusCode).json({
  data,
  status: true,
  message: message || 'Ok',
  rowsCount,
});

const responseInValidArgument = (res, error) => res.status(400).json({
  data: null,
  status: false,
  message: error.details.map((item) => item.message).join(', '),
});

module.exports = { responseError, responseData, responseInValidArgument };
