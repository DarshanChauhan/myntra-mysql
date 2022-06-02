const express = require("express");
const route = express.Router();
const { validate } = require("../validation/validation");
const { addressSchema } = require("../schema/addressSchema");

// Controller

const {
  insertAddress,
  getAllAddress,
  updateAddress,
  deleteAddress,
} = require("../controller/addressConroller");

//get API
route.get("/", getAllAddress);

//post API
route.post("/", validate(addressSchema), insertAddress);

// put API
route.patch("/:id", validate(addressSchema), updateAddress);

//delete API
route.delete("/:id", deleteAddress);

module.exports = route;
