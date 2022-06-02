const Joi = require("@hapi/joi");

const brandSchema = Joi.object({
  name: Joi.string().min(9).max(200).lowercase().required(),
});

module.exports = {
  brandSchema,
};
