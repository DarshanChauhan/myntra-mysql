const db = require("../models");
const Coupon = db.coupon;

// Get data From Coupon Table

const getAllCoupon = async (req, res) => {
  let coupons;
  try {
    coupons = await Coupon.findAll();
  } catch (error) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving coupons.",
    });
  }
  res.status(201).send(coupons);
};

// insert Data In Coupon

const insertCoupon = async (req, response) => {
  try {
    const {
      bestOffer,
      discount,
      discType,
      minDisc,
      discStartDate,
      discEndDate,
    } = req.body;

    Coupon.create({
      bestOffer: bestOffer,
      discount: discount,
      discType: discType,
      minDisc: minDisc,
      discStartDate: discStartDate,
      discEndDate: discEndDate,
    })
      .then(function (coupons) {
        if (coupons) {
          response.send(coupons);
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
    response.status(500).send({
      message: error.message || "Some error occurred while adding cart",
    });
  }
};
const updateCoupon = async (req, res) => {
  try {
    const patchData = req.body;

    const updatedCoupon = await Coupon.update(patchData, {
      where: { couponId: req.params.couponId },
    });
    res.send({ success: true });
  } catch (e) {
    res.status(500).send(e);
  }
};

const deleteCoupon = async (req, res) => {
  try {
    const deleteCoupon = await Coupon.destroy({
      where: { couponId: req.params.couponId },
    });
    res.send({ success: true });
  } catch (e) {
    res.status(500).send(e);
  }
};
// export

module.exports = {
  insertCoupon,
  getAllCoupon,
  updateCoupon,
  deleteCoupon,
};
