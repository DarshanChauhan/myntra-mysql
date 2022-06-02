const { Op } = require("sequelize");
const { add } = require("nodemon/lib/rules");
const { payment, address } = require("../models");
const db = require("../models");
const product = require("../models/product");
const { string } = require("joi");
const { json } = require("express/lib/response");
const Order = db.order;
const Cart = db.cart;
const Product = db.products;
const Address = db.address;
const Payment = db.payment;
const Coupon = db.coupon;

//Get Data From Orders Tables

const getAllOrder = async (req, res) => {
  let order;
  try {
    order = await Order.findAll({});
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving order",
    });
  }
  res.status(201).send(order);
};

// Insert Data In Orders Tables

const insertOrder = async (req, res) => {
  try {
    const { cartId, paymentType, addressId, totalAmout } = req.body;
    Order.create({
      cartId: cartId,
      paymentType: paymentType,
      addressId: addressId,
      totalAmout: totalAmout,
    })
      .then(function (order) {
        if (order) {
          res.send(order);
        } else {
          res.status(400).send("Error in insert new data  order");
        }
      })
      .catch(function (error) {
        res.status(500).send({
          message: error || "Some error occurred while adding product",
        });
      });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while order",
    });
  }
};

console.log("hello");
// Place Order

async function placeOrder(req, res) {
  const requestData = req.body;
  try {
    let cart = await Cart.findOne({ where: { cartId: requestData.cartId } });
    if (cart !== "") {
      const pId = cart.pId;
      let product = await Product.findOne({ where: { pId: cart.pId } });
      let coupon = await Coupon.findOne({ where: { couponId: cart.couponId } });
      let payment = await Payment.findOne({
        where: { paymentOption: requestData.paymentOption },
      });

      const address = await Address.findOne({
        where: { address1: requestData.address },
      });

      if (address !== "") {
        const addAddress = await Address.create({
          address1: requestData.address,
          customerId: cart.customerId,
        });

        const todayDate = Date.parse(new Date().toISOString().split("T")[0]);
        const startDate = Date.parse(coupon.discStartDate);
        const endDate = Date.parse(coupon.discEndDate);
        if (
          !(todayDate >= startDate && endDate == null) ||
          (todayDate >= startDate && todayDate <= endDate)
        ) {
          console.log("Apply SuccessFully");
        } else {
          console.log("Not Valid Coupon");
        }

        const price = product.price * cart.quantity;
        let totalPrice;
        if (price >= coupon.minDisc) {
          totalPrice = price - coupon.discount;
        } else {
          res.json({
            message: `please your minimum value is ${coupon.minDisc}`,
          });
        }
        const data = await Order.create({
          cartId: cart.cartId,
          paymentType: payment.paymentId,
          addressId: addAddress.id,
          price: price,
          totalAmout: totalPrice,
          orderDate: "2022-05-20 12:08:43",
          status: "new done",
        });
        res.send(data);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "please enter valid cartId " || error.message,
    });
  }
}

const updateOrder = async (req, res) => {
  try {
    const patchData = req.body;

    const updatedOrder = await Order.update(patchData, {
      where: { oId: req.params.oId },
    });
    console.log(updatedOrder);
    res.send({ success: true });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const deleteOrder = await Order.destroy({
      where: { oId: req.params.oId },
    });
    console.log(deleteOrder);
    res.send({ success: true });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

module.exports = {
  getAllOrder,
  insertOrder,
  placeOrder,
  updateOrder,
  deleteOrder,
  // findOrCreate,
};
