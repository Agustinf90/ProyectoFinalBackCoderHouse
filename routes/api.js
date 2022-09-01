const router = require('express').Router();

const auth = require('../middlewares/auth')
const apiProductsRouter = require('./api/products')
const apiUsersRouter = require('./api/users')
const apiCartsRouter = require('./api/carts')


router.use('/products' ,apiProductsRouter)
router.use('/users', apiUsersRouter)
router.use('/carts', auth.checkToken, apiCartsRouter)

module.exports = router;