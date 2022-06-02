const Sequelize = require("sequelize");
const Joi = require("@hapi/joi");

module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define(
    "brands",
    {
      bId: {
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
  return Brand;
};

// const newUser = Joi.object({
//   name: Joi.string().min(9).max(200).lowercase().required(),
// });

// module.exports = {
//   newUser,
// };0
