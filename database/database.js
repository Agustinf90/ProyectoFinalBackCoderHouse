const Sequelize = require("sequelize");
const ProductsModel = require("../components/products/model/products.model");
const UserModel = require("../components/users/model/users.model");
const CartsModel = require("../components/carts/model/carts.model");
const { config } = require("../config");

const sequelize = new Sequelize({
  database: config.db,
  username: config.db_username,
  password: config.db_pass,
  host: config.db_host,
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const Products = ProductsModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Carts = CartsModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("tables products syncronized");
});
module.exports = {
  Products,
  User,
  Carts,
};
