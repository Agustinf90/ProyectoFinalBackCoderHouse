const router = require("express").Router();

const { check } = require("express-validator");

const usersControllers = require("./controller/users.controller");

router.post(
  "/register",
  [
    check("username", "El nombre de usuario es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio").not().isEmpty(),
    check("passwordVerification", "El password es obligatorio").not().isEmpty(),
    check("phone", "El telefono es obligatorio").not().isEmpty(),
    check("address", "Tu dirección es obligatoria").not().isEmpty(),
    check("city", "Tu ciudad es obligatoria").not().isEmpty(),
    check("email", "El email indicado no tiene formato de mail").isEmail(),
  ],
  usersControllers.handlingRegister
);

router.post("/login", usersControllers.handlingLogin);

// configuración token y expiración sesión/token

module.exports = router;
