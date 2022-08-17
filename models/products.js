module.exports = (sequelize, type) => {
    return sequelize.define('products', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: type.STRING,
        stock: type.INTEGER,
        price: type.INTEGER
    })
}

// module.exports = (sequelize, type) => {
//     return sequelize.define('products', {
//         id: {
//             type: type.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         name: type.STRING,
//         stock: type.INTEGER,
//         price: type.INTEGER
//     })
// }
