// Server side rendering

const express = require('express')
const {getHomePage, getAbc} = require('../controllers/home.controller')
const router = express.Router()

//route.method('route', handler)

router.get('/', getHomePage)

router.get('/abc', getAbc)



module.exports = router;