const router = require("express").Router();

const checkoutController = require("./controller/checkout.controller");
const auth = require("../../middlewares/auth");
router.get("/", auth.checkToken, checkoutController.checkout);

// update de los productos x carrito y delete carrito

module.exports = router;
