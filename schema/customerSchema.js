const Joi = require("@hapi/joi");

const customerSchema = Joi.object({
  firstName: Joi.string().min(3).max(200).lowercase().required(),
  lastName: Joi.string().min(3).max(200).lowercase().required(),
  username: Joi.string().min(3).max(200).lowercase().required(),
  phoneNo: Joi.string().min(10).max(10).lowercase().required(),
  email: Joi.string().email().min(5).max(50).lowercase().required(),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .min(8)
    .lowercase()
    .max(120)
    .required(),
  addressId: Joi.string().required(),
});

module.exports = {
  customerSchema,
};
