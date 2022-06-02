const db = require("../models");
const Customer = db.customer;

const getAllCustomer = async (req, res) => {
  let customer;
  try {
    customer = await Customer.findAll({});
  } catch (error) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving customer.",
    });
  }
  res.send(customer);
};

const insertCustomer = async (req, response) => {
  try {
    const {
      firstName,
      lastName,
      username,
      phoneNo,
      email,
      password,
      addressId,
    } = req.body;
    Customer.create({
      firstName: firstName,
      lastName: lastName,
      username: username,
      phoneNo: phoneNo,
      email: email,
      password: password,
      addressId: addressId,
    })
      .then(function (customer) {
        if (customer) {
          response.send(customer);
        } else {
          response.status(400).send("Error in insert new data  customer");
        }
      })
      .catch(function (error) {
        res.status(500).send({
          message: error || "Some error occurred while adding product",
        });
      });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while custome",
    });
  }
};

const customerUpdate = async (req, res) => {
  try {
    const patchData = req.body;

    const updatedCustomer = await Customer.update(patchData, {
      where: { customerId: req.params.customerId },
    });
    res.send({ success: true });
  } catch (e) {
    res.status(500).send(e);
  }
};

const customerDelete = async (req, res) => {
  try {
    const updatedCustomer = await Customer.destroy({
      where: { customerId: req.params.customerId },
    });
    res.send({ success: true });
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  getAllCustomer,
  insertCustomer,
  customerUpdate,
  customerDelete,
};
