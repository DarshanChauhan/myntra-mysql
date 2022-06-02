const db = require("../models");
const Carts = db.cart;

const getAllCarts = async (req, res) => {
  let cart;
  try {
    cart = await Carts.findAll({ where: req.body });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving carts.",
    });
  }
  res.send(cart);
};

module.exports = {
  getAllCarts,
};
