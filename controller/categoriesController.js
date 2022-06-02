const db = require("../models");
const Categories = db.categories;

const getAllCategories = async (req, res) => {
  let categories;
  try {
    categories = await Categories.findAll({});
  } catch (error) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving categories.",
    });
  }
  res.send(categories);
};

const insertCategories = async (req, response) => {
  try {
    const { name } = req.body;
    Categories.create({
      name: name,
    })
      .then(function (categories) {
        if (categories) {
          response.send(categories);
        } else {
          response.status(400).send("Error in insert new data  categories");
        }
      })
      .catch(function (error) {
        res.status(500).send({
          message: error || "Some error occurred while adding product",
        });
      });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while categorie",
    });
  }
};
const updateCategories = async (req, res) => {
  try {
    const patchData = req.body;

    const updatedCategories = await Categories.update(patchData, {
      where: { cId: req.params.cId },
    });
    console.log(updatedCategories);
    res.send({ success: true });
  } catch (e) {
    res.status(500).send(e);
  }
};

const deleteCategories = async (req, res) => {
  try {
    const deleteCategories = await Categories.destroy({
      where: { cId: req.params.cId },
    });
    res.send({ success: true });
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  getAllCategories,
  insertCategories,
  updateCategories,
  deleteCategories,
};
