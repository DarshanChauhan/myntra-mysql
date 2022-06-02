const express = require("express");
const route = express.Router();
const { validate } = require("../validation/validation");
const { cartSchema } = require("../schema//cartSchema");

// Controller

const {
  getAllCarts,
  insertCart,
  updateCart,
  deleteCart,
} = require("../controller/addToCartController");

//get API
route.get("/", getAllCarts);

//post API
route.post("/", validate(cartSchema), insertCart);

// put API
route.patch("/:cartId", validate(cartSchema), updateCart);

//delete API
route.delete("/:cartId", deleteCart);

module.exports = route;
