const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    "categories",
    {
      cId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
    },
    { underscored: true }
  );
  return Categories;
};
