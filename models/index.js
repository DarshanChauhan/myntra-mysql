const { Sequelize, DataTypes } = require("sequelize");

// DB Connection

const sequelize = new Sequelize("myntra", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
  pool: { max: 5, min: 0, idle: 10000 },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected to DB successfully ✅");
  })
  .catch((error) => {
    console.log(error);
  });

// table schema Declaration

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.brands = require("./brand")(sequelize, DataTypes);
db.products = require("./product")(sequelize, DataTypes);
db.cart = require("./cart")(sequelize, DataTypes);
db.address = require("./address")(sequelize, DataTypes);
db.coupon = require("./coupon")(sequelize, DataTypes);
db.addtocart = require("./addtocart")(sequelize, DataTypes);
db.order = require("./order")(sequelize, DataTypes);
db.customer = require("./customer")(sequelize, DataTypes);
db.payment = require("./payment")(sequelize, DataTypes);
db.categories = require("./categories")(sequelize, DataTypes);

db.sequelize.sync().then(() => {
  console.log("Drop and re-aync db");
});

module.exports = db;
