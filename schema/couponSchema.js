const Joi = require("@hapi/joi");

const couponSchema = Joi.object({
  bestOffer: Joi.required(),
  discount: Joi.required(),
  discType: Joi.required(),
  minDisc: Joi.required(),
  discStartDate: Joi.required(),
  discEndDate: Joi.required(),
});

module.exports = {
  couponSchema,
};
