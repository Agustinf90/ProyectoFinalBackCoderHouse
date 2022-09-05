const router = require("express").Router();

const cartsController = require("./controller/carts.controller");

router.get("/", cartsController.getCart);
router.post("/product/:productId", cartsController.addProductToCart);
router.put("/:productId", cartsController.updateCart);
router.delete("/", cartsController.emptyCart);

// update de los productos x carrito y delete carrito

module.exports = router;
