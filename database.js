// const mysql = require('mysql');

// let connection = mysql.createConnection({
//     host: 'us-cdbr-east-06.cleardb.net',
//     // 'localhost'
//     database: 'heroku_fac4075feff3da3',
//     // 'sakila'
//     user: 'bb7b7f5bda1854',
//     // 'root'
//     password: '25bde04d'
//     // 'poiupo77'

// })

// module.exports = connection;

const Sequelize = require('sequelize');
const ProductsModel = require('./models/products')
const UserModel = require('./models/users')
const CartsModel = require('./models/carts')
// const sequelize = new Sequelize ('d2uei68p7b848s', 'wnavumdyfypend', 'b53dd7e321287cc005024c7bb7400d9fc978b35a27bdb249d495cca9816a1fdd', {
//     host: 'ec2-44-205-112-253.compute-1.amazonaws.com',
//     dialect: 'postgres',port: 5432,ssl: true
// });
const sequelize = new Sequelize({
    database: "d2uei68p7b848s",
    username: "wnavumdyfypend",
    password: "b53dd7e321287cc005024c7bb7400d9fc978b35a27bdb249d495cca9816a1fdd",
    host: "ec2-44-205-112-253.compute-1.amazonaws.com",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
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