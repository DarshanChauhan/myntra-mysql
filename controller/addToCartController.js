const db = require("../models");
const Addtocart = db.addtocart;

const getAllCarts = async (req, res) => {
  let addtocart;
  try {
    addtocart = await Addtocart.findAll();
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while retrieving add-to-cart",
    });
  }
  res.status(201).send(addtocart);
};

const insertCart = async (req, response) => {
  try {
    const { customerId, pId, couponId } = req.body;
    cartdata = await Addtocart.findOne({
      where: { customerId: customerId, pId: pId },
    });

    if (cartdata && cartdata.customerId && cartdata.pId) {
      response.status(422).send({
        message: "Cart Already Exists",
      });
    }
    Addtocart.create({
      customerId: customerId,
      pId: pId,
      couponId: couponId,
    })
      .then(function (addtocart) {
        if (addtocart) {
          response.send(addtocart);
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
const updateCart = async (req, res) => {
  try {
    const patchData = req.body;

    const updatedCart = await Addtocart.update(patchData, {
      where: { cartId: req.params.cartId },
    });
    console.log(updatedCart);
    res.send({ success: true });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const deleteCart = async (req, res) => {
  try {
    const deleteCart = await Addtocart.destroy({
      where: { cartId: req.params.cartId },
    });
    console.log(deleteCart);
    res.send({ success: true });
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

// const deleteCartByCustomerId = async (req, res) => {
//   try {
//     const deleteCart = await Addtocart.destroy({
//       where: { customerId: req.params.customerId },
//     });
//     console.log(deleteCart);
//     res.send({ success: true });
//   } catch (e) {
//     console.log(e);
//     res.status(500).send(e);
//   }
// };

module.exports = {
  getAllCarts,
  insertCart,
  updateCart,
  deleteCart,
  // deleteCartByCustomerId,
};
