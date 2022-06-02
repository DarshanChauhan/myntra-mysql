module.exports = (sequelize, DataTypes) => {
  const coupon = sequelize.define(
    "coupons",
    {
      couponId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      bestOffer: { type: DataTypes.STRING },
      discount: { type: DataTypes.INTEGER },
      discType: { type: DataTypes.INTEGER },
      minDisc: { type: DataTypes.INTEGER },
      discStartDate: { type: DataTypes.INTEGER },
      discEndDate: { type: DataTypes.INTEGER },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { underscored: true }
  );
  return coupon;
};
