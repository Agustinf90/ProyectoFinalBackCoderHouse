const { Products } = require("../../../database/database");

async function getProducts(req, res) {
  const products = await Products.findAll();
  res.status(200).json(products);
}

async function getProductById(req, res) {
  let productId = Number(req.params.productId);
  let productActual = await Products.findOne({ where: { id: productId } });
  if(productActual) {res.status(200).json(productActual);}
  else{
    res.status(403).json("no existe el producto");
  }
  
}

async function createProducts(req, res) {
  const product = await Products.create(req.body);
  res.status(200).json(product);
}

async function updateProduct(req, res) {
  await Products.update(req.body, {
    where: { id: req.params.productId },
  });
  res.status(200).json({ success: "modificado" });
}

async function deleteProduct(req, res) {
  await Products.destroy({
    where: { id: req.params.productId },
  });
  res.status(200).json({ success: "eliminado" });
}
module.exports = {
  getProducts,
  getProductById,
  createProducts,
  updateProduct,
  deleteProduct,
};
