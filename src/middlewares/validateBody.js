import createError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, {
      abortEarly: false,
    });
    next();
  } catch (err) {
    const errorDetails = err.details.map((detail) => ({
      message: detail.message,
      path: detail.path,
      type: detail.type,
    }));

    const error = createError(
      errorDetails.detail.type,
      errorDetails.detail.message,
      {
        errors: errorDetails,
      },
    );

    if (err.code) {
      console.error(`Error code: ${err.code}`);
    }

    console.error(`Validation errors: `, errorDetails);
    next(error);
  }
};
