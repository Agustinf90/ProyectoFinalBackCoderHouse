const router = require('express').Router();

const auth = require('../middlewares/auth')
const apiProductsRouter = require('../components/products/products')
const apiUsersRouter = require('../components/users/users')
const apiCartsRouter = require('../components/carts/carts')
const apiImagesRouter = require('../components/images/images')
const apiCheckoutRouter = require('../components/checkout/checkout')


router.use('/products' ,apiProductsRouter)
router.use('/users', apiUsersRouter)
router.use('/carts', auth.checkToken, apiCartsRouter)
router.use('/upload', apiImagesRouter)
router.use('/checkout', apiCheckoutRouter)

module.exports = router;