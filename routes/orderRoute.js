const express = require("express");
const route = express.Router();

// Controller

const {
  getAllOrder,
  insertOrder,
  placeOrder,
  updateOrder,
  deleteOrder,
} = require("../controller/orderController");

//get API
route.get("/", getAllOrder);

//post API
route.post("/find", placeOrder);

route.post("/", insertOrder);

// put API

route.patch("/:oId", updateOrder);

//delete API

route.delete("/:oId", deleteOrder);

module.exports = route;
