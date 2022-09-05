module.exports = (sequelize, DataTypes, type) => {
  return sequelize.define("carts", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
    },
    products: {
      type: DataTypes.JSON,
    },
  });
};
