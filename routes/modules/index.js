const express = require('express')
const router = express.Router()
const requireLogin = require('../../middleware/auth')
const BookController = require('../../controllers/bookController')
const bookController = new BookController()


router.get('/', requireLogin, bookController.selectBook)

module.exports = router