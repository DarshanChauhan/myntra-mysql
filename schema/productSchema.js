const Joi = require("@hapi/joi");

const productSchema = Joi.object({
  name: Joi.string().min(9).max(200).lowercase().required(),
  decription: Joi.string().min(9).max(200).lowercase().required(),
  price: Joi.required(),
  quantity: Joi.required(),
  brandId: Joi.required(),
  categoriesId: Joi.required(),
  sku: Joi.required(),
});

module.exports = {
  productSchema,
};
