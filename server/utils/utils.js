export const AuthenticationError = (message) => {
  const NewError = new Error(message);
  return {
    type: "AUTHENTICATION ERROR",
    code: NewError.code || 401,
    name: NewError.name,
    message: NewError.message,
  };
};

export const ValidationError = (message) => {
  const NewError = new Error(message);
  return {
    type: "VALIDATION ERROR",
    code: NewError.code || 400,
    name: NewError.name,
    message: NewError.message,
  };
};

export const VerificationError = (message) => {
  const NewError = new Error(message);
  return {
    type: "VERIFICATION ERROR",
    code: NewError.code || 400,
    name: NewError.name,
    message: NewError.message,
  };
};

export const TryCatch = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    next(error);
  }
};
