const express = require("express");
const route = express.Router();
const { validate } = require("../validation/validation");
const { paymentSchema } = require("../schema/paymentSchema");

// Controller

const {
  getAllPaymentType,
  insertPaymentOption,
  updatePaymentType,
  deletePaymentType,
} = require("../controller/paymentController");

//get API
route.get("/", getAllPaymentType);

//post API
route.post("/", validate(paymentSchema), insertPaymentOption);

// put API
route.patch("/:paymentId", validate(paymentSchema), updatePaymentType);

//delete API
route.delete("/:paymentId", deletePaymentType);

module.exports = route;
