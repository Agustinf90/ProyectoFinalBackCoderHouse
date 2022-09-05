module.exports = (sequelize, type) => {
  return sequelize.define("user", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: type.STRING,
    email: type.STRING,
    password: type.STRING(150),
    passwordVerification: type.STRING(150),
    phone: type.INTEGER,
    cart: type.JSON,
    address: type.STRING,
    city: type.STRING,
  });
};
