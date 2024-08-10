const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  const extraDetails = err.extraDetails || 'Internal Server Error';

  res.status(status).json({
    status,
    message,
    extraDetails,
  });

  console.error(
    `[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}, ExtraDetails:: ${extraDetails}`
  );
};

module.exports = errorMiddleware;
