const express = require('express')
const router = express.Router()
// const book = require('./modules/book')
const login = require('./modules/login')
const user = require('./modules/user')
const book = require('./modules/bookBySequelize')

router.use('/book', book)
router.use('/user', user)
router.use('/login', login)

module.exports = router