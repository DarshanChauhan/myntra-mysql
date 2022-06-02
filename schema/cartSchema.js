const Joi = require("@hapi/joi");

const cartSchema = Joi.object({
  pId: Joi.required(),
  quantity: Joi.required(),
  customerId: Joi.required(),
  couponId: Joi.required(),
});

module.exports = {
  cartSchema,
};
