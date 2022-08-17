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
const sequelize = new Sequelize ('heroku_fac4075feff3da3', 'bb7b7f5bda1854', '25bde04d', {
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql'
});

const Products = ProductsModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize)

sequelize.sync({force: false})
.then(()=> {
    console.log('tables products syncronized')
})
module.exports = {
    Products,
    User
}

// const Products = ProductsModel(sequelize, Sequelize);
// sequelize.sync({force: false})
// .then(()=> {
//     console.log('tables syncronized')
// })
// module.exports = {
//     Products
// }