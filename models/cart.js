module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define(
    "carts",
    {
      cartId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
      customerId: {
        type: DataTypes.INTEGER,
        references: {
          model: "address",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
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
  return cart;
};
