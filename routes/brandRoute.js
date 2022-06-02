const express = require("express");
const route = express.Router();
const { validate } = require("../validation/validation");
const { brandSchema } = require("../schema/brandSchema");

// Controller

const {
  getAllBrand,
  insertBrand,
  updateBrand,
  deleteBrand,
} = require("../controller/brandController");

//get API
route.get("/", getAllBrand);

//post API
route.post("/", validate(brandSchema), insertBrand);

// put API
route.patch("/:bId", validate(brandSchema), updateBrand);

//delete API
route.delete("/:bId", deleteBrand);

module.exports = route;
