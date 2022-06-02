const Joi = require("@hapi/joi");

const paymentSchema = Joi.object({
  paymentOption: Joi.required(),
});

module.exports = {
  paymentSchema,
};
