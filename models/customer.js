module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "customers",
    {
      customerId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: { type: DataTypes.STRING },
      lastName: { type: DataTypes.INTEGER },
      username: { type: DataTypes.INTEGER },
      phoneNo: { type: DataTypes.INTEGER },
      email: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
      addressId: { type: DataTypes.INTEGER },
      createdAt: { type: DataTypes.DATE },
      updatedAt: { type: DataTypes.DATE },
    },
    { underscored: true }
  );
  return Customer;
};
