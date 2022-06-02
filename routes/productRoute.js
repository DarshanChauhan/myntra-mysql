const express = require("express");
const route = express.Router();
const { validate } = require("../validation/validation");
const { productSchema } = require("../schema/productSchema");

// Controller

const {
  getAllProducts,
  insertProducts,
  updateProducts,
  deleteProducts,
} = require("../controller/productController");

//get API
route.get("/", getAllProducts);

// post API
route.post("/", validate(productSchema), insertProducts);

// put API
route.patch("/:pId", validate(productSchema), updateProducts);

//delete API
route.delete("/:pId", deleteProducts);

module.exports = route;
