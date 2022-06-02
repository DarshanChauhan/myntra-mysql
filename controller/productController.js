const db = require("../models");
const Products = db.products;

//Get All Data In Product Table

const getAllProducts = async (req, res, next) => {
  let product;
  try {
    product = await Products.findAll({});
  } catch (error) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving Products.",
    });
  }
  res.send(product);
};

// Insert Data In Product Table

const insertProducts = async (req, response) => {
  try {
    const { name, decription, price, quantity, brandId, categoriesId, sku } =
      req.body;

    Products.create({
      name: name,
      decription: decription,
      price: price,
      quantity: quantity,
      brandId: brandId,
      categoriesId: categoriesId,
      sku: sku,
    })
      .then(function (product) {
        if (product) {
          response.send(product);
        } else {
          response.status(400).send("Error in insert new data  product");
        }
      })
      .catch(function (error) {
        response.status(422).send({
          message: error || "Some error occurred while adding product",
        });
      });
  } catch (error) {
    response.status(500).send({
      message: error.message || "Some error occurred while adding product",
    });
  }
};

// update Product

const updateProducts = async (req, res) => {
  try {
    const patchData = req.body;

    const updatedProducts = await Products.update(patchData, {
      where: { pId: req.params.pId },
    }).catch(function (error) {
      res.status(500).send({
        message: error || "Some error occurred while adding product",
      });
    });
    res.send({ success: true });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

//delete Product

const deleteProducts = async (req, res) => {
  try {
    const deleteProducts = await Products.destroy({
      where: { pId: req.params.pId },
    });
    res.send({ success: true });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

module.exports = {
  getAllProducts,
  insertProducts,
  updateProducts,
  deleteProducts,
};
