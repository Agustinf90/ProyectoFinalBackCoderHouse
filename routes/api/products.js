const router = require('express').Router();
const mysql = require ('mysql');


const productsController = require('../../controllers/products.controller')
const uploadController = require('../../controllers/images.controller')
const isAdmin = require('../../middlewares/isAdmin')

router.get('/', productsController.getProducts)
router.get('/:productId', productsController.getProductById)
router.post('/', isAdmin.isAdmin, productsController.createProducts)
router.put('/:productId', isAdmin.isAdmin, productsController.updateProduct)
router.delete('/:productId', isAdmin.isAdmin, productsController.deleteProduct)
router.post('/upload', isAdmin.isAdmin, uploadController.upload, uploadController.uploadFile)

module.exports = router