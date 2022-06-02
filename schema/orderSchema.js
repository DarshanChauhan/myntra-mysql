const Joi = require("@hapi/joi");

const orderSchema = Joi.object({
  cartId: Joi.required(),
  paymentType: Joi.required(),
  addressId: Joi.required(),
  totalAmout: Joi.required(),
  orderDate: Joi.required(),
  status: Joi.string(),
});

module.exports = {
  orderSchema,
};
