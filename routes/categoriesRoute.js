const express = require("express");
const route = express.Router();
const { validate } = require("../validation/validation");
const { categoriesSchema } = require("../schema/categoriesSchema");

// Controller

const {
  getAllCategories,
  insertCategories,
  updateCategories,
  deleteCategories,
} = require("../controller/categoriesController");

//get API
route.get("/", getAllCategories);

//post API
route.post("/", validate(categoriesSchema), insertCategories);

// put API
route.patch("/:cId", validate(categoriesSchema), updateCategories);

//delete API
route.delete("/:cId", deleteCategories);

module.exports = route;
