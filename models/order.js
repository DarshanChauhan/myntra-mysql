const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "orders",
    {
      oId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      cartId: { type: Sequelize.STRING },
      paymentType: {
        type: DataTypes.INTEGER,
        references: {
          model: "payment",
          key: "payment_id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      addressId: {
        type: DataTypes.INTEGER,
        references: {
          model: "addresses",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      totalAmout: { type: Sequelize.INTEGER },
      orderDate: { type: Sequelize.DATE },
      status: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
    },
    { underscored: true }
  );
  return Order;
};
