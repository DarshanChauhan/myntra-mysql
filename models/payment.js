module.exports = (sequelize, DataTypes) => {
  const Payments = sequelize.define(
    "payments",
    {
      paymentId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      paymentOption: { type: DataTypes.STRING },
      createdAt: { type: DataTypes.DATE },
      updatedAt: { type: DataTypes.DATE },
    },
    { underscored: true }
  );
  return Payments;
};
