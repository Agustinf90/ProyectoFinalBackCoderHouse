const router = require("express").Router();
const mysql = require("mysql");

const productsController = require("./controller/products.controller");

const isAdmin = require("../../middlewares/isAdmin");

router.get("/", productsController.getProducts);
router.get("/:productId", productsController.getProductById);
router.post("/", isAdmin.isAdmin, productsController.createProducts);
router.put("/:productId", isAdmin.isAdmin, productsController.updateProduct);
router.delete("/:productId", isAdmin.isAdmin, productsController.deleteProduct);

module.exports = router;
