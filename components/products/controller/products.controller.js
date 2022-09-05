const { Products } = require("../../../database/database");

async function getProducts(req, res) {
  const products = await Products.findAll();
  res.json(products);
}

async function getProductById(req, res) {
  let productId = Number(req.params.productId);
  let productActual = await Products.findOne({ where: { id: productId } });
  res.json(productActual);
}

async function createProducts(req, res) {
  const product = await Products.create(req.body);
  res.json(product);
}

async function updateProduct(req, res) {
  await Products.update(req.body, {
    where: { id: req.params.productId },
  });
  res.json({ success: "modificado" });
}

async function deleteProduct(req, res) {
  await Products.destroy({
    where: { id: req.params.productId },
  });
  res.json({ success: "eliminado" });
}
module.exports = {
  getProducts,
  getProductById,
  createProducts,
  updateProduct,
  deleteProduct,
};
