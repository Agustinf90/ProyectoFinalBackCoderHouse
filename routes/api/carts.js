const router = require('express').Router();
const mysql = require('mysql');

const cartsController = require('../../controllers/carts.controller')
const checkoutController = require('../../controllers/checkout.controller')


router.get('/', cartsController.getCart)
router.post('/product/:productId', cartsController.addProductToCart)
router.put('/:productId', cartsController.updateCart)
router.delete('/', cartsController.emptyCart)
router.get('/checkout', checkoutController.checkout)

// update de los productos x carrito y delete carrito


module.exports = router