const express = require('express')
const route = express.Router()
const verifyJWT = require('..//middleware/verifyJwt')

const { createUser } = require('../controller/registrationController')
const loginUser = require('../controller/loginController')
const loadUserProfile = require('../controller/loadProfile')

route.post('/login', loginUser)
route.post('/register', createUser)
route.use(verifyJWT)

route.get('/profile', loadUserProfile)

module.exports = route