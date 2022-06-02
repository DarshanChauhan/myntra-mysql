module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "products",
    {
      pId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING },
      decription: { type: DataTypes.STRING },
      price: { type: DataTypes.INTEGER },
      quantity: { type: DataTypes.INTEGER },
      brandId: {
        type: DataTypes.INTEGER,
        references: {
          model: "brands",
          key: "Brand_id  ",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      categoriesId: {
        type: DataTypes.INTEGER,
        references: {
          model: "categories",
          key: "c_id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      sku: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    { underscored: true }
  );
  return Product;
};
