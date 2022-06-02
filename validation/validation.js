const { type } = require("@hapi/joi/lib/extend");
const Joi = require("joi");

const validate = (Schema) => {
  return (req, res, next) => {
    const { error, value } = Schema.validate(req.body);
    if (error === undefined || typeof error === "undefined") return next();

    let { details } = error;
    const message = details.map((i) => i.message).join(",");
    res.status(422).json({ message: message, statusCode: 422 });

    next(details);
  };
};

module.exports = {
  validate,
};
