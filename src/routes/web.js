// Server side rendering

const express = require('express')
const { getHomePage, getAbc, getUsers, registerUser } = require('../controllers/home.controller')
const router = express.Router()

//route.method('route', handler)

router.get('/', getHomePage)

router.get('/abc', getAbc)

router.get('/users', getUsers)

router.post('/register', registerUser)



module.exports = router;