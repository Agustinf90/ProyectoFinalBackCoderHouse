
const Sequelize = require('sequelize');
const ProductsModel = require('../models/products')
const UserModel = require('../models/users')
const CartsModel = require('../models/carts')

const sequelize = new Sequelize({
    database: "d2uei68p7b848s",
    username: "wnavumdyfypend",
    password: "b53dd7e321287cc005024c7bb7400d9fc978b35a27bdb249d495cca9816a1fdd",
    host: "ec2-44-205-112-253.compute-1.amazonaws.com",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, 
        rejectUnauthorized: false 
      }
    },
  });

const Products = ProductsModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize)
const Carts = CartsModel(sequelize, Sequelize)

sequelize.sync({force: false})
.then(()=> {
    console.log('tables products syncronized')
})
module.exports = {
    Products,
    User,
    Carts
}

// const Products = ProductsModel(sequelize, Sequelize);
// sequelize.sync({force: false})
// .then(()=> {
//     console.log('tables syncronized')
// })
// module.exports = {
//     Products
// }