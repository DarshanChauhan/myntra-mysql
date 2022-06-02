const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Addtocart = sequelize.define(
    "carts",
    {
      cartId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      customerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "address",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      pId: {
        type: DataTypes.INTEGER,
        references: {
          model: "products",
          key: "p_id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      quantity: { type: DataTypes.STRING },
      couponId: {
        type: DataTypes.INTEGER,
        references: {
          model: "coupons",
          key: "coupon_id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { underscored: true }
  );
  return Addtocart;
};
