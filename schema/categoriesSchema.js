const Joi = require("@hapi/joi");

const categoriesSchema = Joi.object({
  name: Joi.string().min(3).max(200).lowercase().required(),
});

module.exports = {
  categoriesSchema,
};
