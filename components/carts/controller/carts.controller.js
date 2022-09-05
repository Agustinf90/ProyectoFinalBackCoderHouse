const { Carts } = require("../../../database/database");
const { Products } = require("../../../database/database");

async function getCart(req, res) {
  let cart = await Carts.findOne({ where: { id: req.usuarioId } });
  res.json(cart);
}

async function addProductToCart(req, res) {
  let cart = await Carts.findOne({ where: { id: req.usuarioId } });
  let productId = Number(req.params.productId);
  let productActual = await Products.findOne({ where: { id: productId } });

  console.log(cart);

  if (!!productActual) {
    let productsUpdated = cart.products;

    if (!productsUpdated) {
      productsUpdated = [];
    }

    let prodInCart = productsUpdated.find(
      (item) => item.id === productActual.dataValues.id
    );
    if (prodInCart) {
      prodInCart.stock++;
      await Carts.update(
        {
          products: productsUpdated,
        },
        {
          where: { id: req.usuarioId },
        }
      );
    } else {
      productsUpdated.push(productActual.dataValues);

      await Carts.update(
        {
          products: productsUpdated,
        },
        {
          where: { id: req.usuarioId },
        }
      );
    }
  }
  let cartUpdated = await Carts.findOne({ where: { id: req.usuarioId } });

  res.send(cartUpdated);
}

async function updateCart(req, res) {
  let cart = await Carts.findOne({ where: { id: req.usuarioId } });

  let productId = Number(req.params.productId);
  let productActual = await Products.findOne({ where: { id: productId } });

  if (productActual) {
    let productsUpdated = [];
    productsUpdated.push(productActual.dataValues);
    await Carts.update(
      {
        products: productsUpdated,
      },
      {
        where: { id: req.usuarioId },
      }
    );
  } else {
  }

  let cartUpdated = await Carts.findOne({ where: { id: req.usuarioId } });
  res.send(cartUpdated);
}

async function emptyCart(req, res) {
  let cart = await Carts.findOne({ where: { id: req.usuarioId } });
  await Carts.update(
    {
      products: [],
    },
    {
      where: { id: req.usuarioId },
    }
  );

  let cartUpdated = await Carts.findOne({ where: { id: req.usuarioId } });
  res.send(cartUpdated);
}

module.exports = {
  getCart,
  addProductToCart,
  updateCart,
  emptyCart,
};
