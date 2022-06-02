const db = require("../models");
const Addresses = db.address;

const getAllAddress = async (req, res) => {
  let address;
  try {
    address = await Addresses.findAll({});
  } catch (error) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving Addresses.",
    });
  }
  res.send(address);
};

const insertAddress = async (req, response) => {
  try {
    const { customerId, address1, address2, country, state, city, zipcode } =
      req.body;
    Addresses.create({
      customerId: customerId,
      address1: address1,
      address2: address2,
      country: country,
      state: state,
      city: city,
      zipcode: zipcode,
    }).then(function (address) {
      if (address) {
        response.send(address);
      } else {
        response.status(400).send("Error in insert new data  addtocart");
      }
    });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while adding cart",
    });
  }
};

const updateAddress = async (req, res) => {
  try {
    const patchData = req.body;

    const updatedAddresses = await Addresses.update(patchData, {
      where: { id: req.params.id },
    });
    res.send({ success: true });
  } catch (e) {
    res.status(500).send(e);
  }
};

const deleteAddress = async (req, res) => {
  try {
    const updatedAddresses = await Addresses.destroy({
      where: { id: req.params.id },
    });
    res.send({ success: true });
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  getAllAddress,
  insertAddress,
  updateAddress,
  deleteAddress,
};
