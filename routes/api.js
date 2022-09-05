const router = require('express').Router();

const auth = require('../middlewares/auth')
const apiProductsRouter = require('../components/products/products.route')
const apiUsersRouter = require('../components/users/users.route')
const apiCartsRouter = require('../components/carts/carts.route')
const apiImagesRouter = require('../components/images/images.route')
const apiCheckoutRouter = require('../components/checkout/checkout.route')


router.use('/products' ,apiProductsRouter)
router.use('/users', apiUsersRouter)
router.use('/carts', auth.checkToken, apiCartsRouter)
router.use('/upload', apiImagesRouter)
router.use('/checkout', apiCheckoutRouter)

module.exports = router;