const db = require("../models");
const Payment = db.payment;

//Get All Data In payment Table
const getAllPaymentType = async (req, res) => {
  let payment;
  try {
    payment = await Payment.findAll({});
  } catch (error) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving payment.",
    });
  }
  res.send(payment);
};

// Insert Data In payment Table

const insertPaymentOption = async (req, response) => {
  try {
    const { paymentOption } = req.body;
    Payment.create({
      paymentOption: paymentOption,
    })
      .then(function (payment) {
        if (payment) {
          response.send(payment);
        } else {
          response.status(400).send("Error in insert new data  payment");
        }
      })
      .catch(function (error) {
        res.status(500).send({
          message: error || "Some error occurred while adding product",
        });
      });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while payment",
    });
  }
};
// update Product

const updatePaymentType = async (req, res) => {
  try {
    const patchData = req.body;

    const updatedPaymentType = await Payment.update(patchData, {
      where: { paymentId: req.params.paymentId },
    });
    console.log(updatedPaymentType);
    res.send({ success: true });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

// Delete Payment

const deletePaymentType = async (req, res) => {
  try {
    const deletePaymentType = await Payment.destroy({
      where: { paymentId: req.params.paymentId },
    });
    console.log(deletePaymentType);
    res.send({ success: true });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};
module.exports = {
  getAllPaymentType,
  insertPaymentOption,
  updatePaymentType,
  deletePaymentType,
};
