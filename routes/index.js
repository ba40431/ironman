const express = require('express')
const router = express.Router()
// const book = require('./modules/book')
const index = require('./modules/index')
const login = require('./modules/login')
const signIn = require('./modules/signIn')
const user = require('./modules/user')
const book = require('./modules/bookBySequelize')

router.use('/', index)
router.use('/book', book)
router.use('/user', user)
router.use('/login', login)
router.use('/signIn', signIn)

module.exports = router