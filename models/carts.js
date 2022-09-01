module.exports = (sequelize, DataTypes, type) => {
    return sequelize.define('carts', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true
        },
        products: {
                type: DataTypes.JSON
              }
    })
}

// address: {
//     type: DataTypes.TEXT,
//       get: function() {
//         return JSON.parse(this.getDataValue("address"));
//       },
//       set: function(value) {
//         return this.setDataValue("address", JSON.stringify(value));
//       }
//   },