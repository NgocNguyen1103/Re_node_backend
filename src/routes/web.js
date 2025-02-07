// Server side rendering

const express = require('express')
const { getHomePage, getAbc, getUsers, registerUser, getRegisterForm, getUpdateForm, updateUser } = require('../controllers/home.controller')
const router = express.Router()

//route.method('route', handler)

router.get('/', getHomePage)

router.get('/abc', getAbc)

router.get('/users', getUsers)

router.get('/newuser', getRegisterForm)

router.post('/register', registerUser)

router.get('/update-user/:user_id', getUpdateForm)

router.post('/update', updateUser)


module.exports = router;