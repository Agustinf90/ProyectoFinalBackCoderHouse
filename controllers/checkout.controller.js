const { Carts } = require('../database')
const { User } = require('../database');
const nodemailer = require('nodemailer');
const emptyCartFunction = require('../controllers/empty.cart.controller')


async function checkout(req, res) {

    let cartActual = await Carts.findOne({ where: { id: req.usuarioId } })

    let cartUpdated = []

    cartUpdated.push(cartActual.dataValues)
    await User.update(
        {
            cart: cartUpdated,
        },
        {
            where: { id: req.usuarioId },
        })

    let userData = await User.findOne({ where: { id: req.usuarioId } })
    let userMail = `"${userData.dataValues.email}"`
    let userCart = userData.dataValues.cart
    let dataCart = await User.findOne({ where: { id: req.usuarioId } })

    let mailData = JSON.stringify(userData.dataValues)
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "agustinff90@gmail.com",
            pass: "kvairbswotropwvc"
        }
    })

    let mailOptions = {
        from: "remitente",
        to: userMail,
        subject: "E-commerce Api",
        // text: mailData
        html: `<div>
        <h2>Gracias por tu compra!</h2>
        <table cellspacing="0">
        <tbody><tr>
        <th>Detalle de tu compra:</th>
        </tr>
        <tr>
        <th>Nombre:</th>
        <td>
        ${JSON.stringify(userData.dataValues.username)}
        </td>
        </tr>
        <tr>
        <th>Domicilio:</th>
        <td>
        ${JSON.stringify(userData.dataValues.address)}-
         ${JSON.stringify(userData.dataValues.city)}
        </td>
        </tr>
        <tr>
        <th>Compra:</th>
        <td>
        ${JSON.stringify(userCart[0].products)}
        </td>
        </tr>
        <tr>
        <th>Fecha</th>
        <td>
        ${JSON.stringify(userData.dataValues.updatedAt)}
        </td>
        </tr>




        <tr class="order-total">
        <th>Total</th>
        <td data-title="Total"><strong><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">$</span>1900,80</bdi></span></strong>
         </td>
        </tr>
        </tbody></table>	
        </div>`
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error)
        }

    })
    let cartRestarted = await Carts.update(
        {
            products: [],
        },
        {
            where: { id: req.usuarioId },
        })

    userRestared = await User.update(
        {
            cart: [],
        },
        {
            where: { id: req.usuarioId },
        })
    userRestared = await User.findOne({ where: { id: req.usuarioId } })
    res.send(userRestared)
}

module.exports = {
    checkout

}