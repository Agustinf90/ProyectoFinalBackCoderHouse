module.exports = (sequelize, type) => {
    return sequelize.define('products', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: type.STRING,
        stock: type.INTEGER,
        price: type.INTEGER,
        category: type.STRING,
        image: type.STRING
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
