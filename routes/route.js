const express = require("express");
const route = express.Router();

// Parent API

route.use("/user", require("./userRoute"));
route.use("/product", require("./productRoute"));
route.use("/brand", require("./brandRoute"));
route.use("/cart", require("./cartRoute"));
route.use("/addresses", require("./addressesRoute"));
route.use("/coupons", require("./couponsRoute"));
route.use("/order", require("./orderRoute"));
route.use("/payment", require("./paymentRoute"));
route.use("/categories", require("./categoriesRoute"));
route.use("/customer", require("./customerRoute"));

module.exports = route;
