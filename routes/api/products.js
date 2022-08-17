const router = require('express').Router();

const { Products } = require('../../database')

router.get('/', async (req, res)=> {
    // console.log(req.usuarioId)
    const products = await Products.findAll();
    res.json(products)
})

router.post('/', async (req, res)=> {
    const product = await Products.create(req.body);
    res.json(product)
})

router.put('/:productId', async (req, res)=> {
    await Products.update(req.body, {
        where: { id: req.params.productId}
    });
    res.json({success: 'modificado'})
})

router.delete('/:productId', async (req, res)=> {
    await Products.destroy({
        where: { id: req.params.productId}
    });
    res.json({success: 'eliminado'})
})

module.exports = router