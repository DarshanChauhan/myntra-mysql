const express = require("express");
const route = express.Router();
const { validate } = require("../validation/validation");
const { addressSchema2 } = require("../schema/addressSchema");

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
route.post("/", validate(addressSchema2), insertAddress);

// put API
route.patch("/:id", validate(addressSchema2), updateAddress);

//delete API
route.delete("/:id", deleteAddress);

module.exports = route;
