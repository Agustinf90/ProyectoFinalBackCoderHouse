const router = require('express').Router();

const { User } = require('../../database/database');
const { check} = require ('express-validator')
const moment = require('moment');
const jwt = require('jwt-simple');
const { Carts } = require('../../database/database')
const usersControllers = require('../../controllers/users.controller')

router.post('/register', [
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('passwordVerification', 'El password es obligatorio').not().isEmpty(),
    check('phone', 'El telefono es obligatorio').not().isEmpty(),
    check('address', 'Tu dirección es obligatoria').not().isEmpty(),
    check('city', 'Tu ciudad es obligatoria').not().isEmpty(),
    check('email', 'El email indicado no tiene formato de mail').isEmail()
],usersControllers.handlingRegister)

router.post('/login', usersControllers.handlingLogin)

// configuración token y expiración sesión/token



module.exports = router;
