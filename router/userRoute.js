
const express = require('express')
const {register, login, singnout} = require('../controllers/user.controller.js')

const router = express.Router();


router.post('/register', register)

router.post('/login', login)

router.get('/logout', singnout)


module.exports = router

















