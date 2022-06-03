const Joi = require("joi");

const addressSchema1 = Joi.object({
  homeAddress: Joi.string().min(9).max(200).lowercase().required(),
  customerId: Joi.required(),
});

module.exports = {
  addressSchema1,
};
