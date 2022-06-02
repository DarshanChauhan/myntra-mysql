const express = require("express");
const route = express.Router();
const { validate } = require("../validation/validation");
const { couponSchema } = require("../schema/couponSchema");

// Controller

const {
  getAllCoupon,
  insertCoupon,
  updateCoupon,
  deleteCoupon,
} = require("../controller/couponController");

//get API
route.get("/", getAllCoupon);

//post API
route.post("/", validate(couponSchema), insertCoupon);

// put API
route.patch("/:couponId", validate(couponSchema), updateCoupon);

//delete API
route.delete("/:couponId", deleteCoupon);

module.exports = route;
