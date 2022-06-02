const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const address = sequelize.define(
    "addresses",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      customerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "customers",
          key: "customer_id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      address1: { type: Sequelize.TEXT },
      address2: { type: Sequelize.TEXT },
      country: { type: Sequelize.TEXT },
      state: { type: Sequelize.TEXT },
      city: { type: Sequelize.TEXT },
      zipcode: { type: Sequelize.INTEGER },

      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
    },
    { underscored: true }
  );
  return address;
};
