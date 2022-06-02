const express = require("express");
const route = express.Router();
const { validate } = require("../validation/validation");
const { customerSchema } = require("../schema/customerSchema");

// Controller

const {
  getAllCustomer,
  insertCustomer,
  customerUpdate,
  customerDelete,
} = require("../controller/customerController");

//get API
route.get("/", getAllCustomer);

//post API
route.post("/", validate(customerSchema), insertCustomer);

// put API
route.patch("/:customerId", validate(customerSchema), customerUpdate);

//delete API
route.delete("/:customerId", customerDelete);

module.exports = route;
