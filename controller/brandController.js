var db = require("../models/index");
const Brands = db.brands;

const getAllBrand = async (req, res) => {
  let brand;
  try {
    brand = await Brands.findAll({});
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving Brands.",
    });
  }
  res.send(brand);
};

const insertBrand = async (req, response) => {
  try {
    const { name } = req.body;
    Brands.create({
      name: name,
    })
      .then(function (brand) {
        if (brand) {
          response.send(brand);
        } else {
          response.status(400).send("Error in insert new data  addtocart");
        }
      })
      .catch(function (error) {
        res.status(500).send({
          message: error || "Some error occurred while adding product",
        });
      });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while adding cart",
    });
  }
};

const updateBrand = async (req, res) => {
  try {
    const patchData = req.body;
    const updatedBrands = await Brands.update(patchData, {
      where: { bId: req.params.bId },
    });
    res.send({ success: true });
  } catch (e) {
    res.status(500).send(e);
  }
};

const deleteBrand = async (req, res) => {
  try {
    const deleteBrands = await Brands.destroy({
      where: { bId: req.params.bId },
    });
    res.send({ success: true });
  } catch (e) {
    res.status(500).send(e);
  }
};
module.exports = {
  insertBrand,
  getAllBrand,
  updateBrand,
  deleteBrand,
};
