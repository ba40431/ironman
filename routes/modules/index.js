const express = require('express')
const router = express.Router()
const { book,user } = require('../../models/index')
const requireLogin = require('../../middleware/auth')

router.get('/', requireLogin, async (req, res) => {

  try {
    const books = await book.findAll({where:{
      memberId: req.session.userId
    },raw: true})

    res.render('index',{'username': req.session.user, books: books})
  } catch (error) {
    res.render('index',{'username': req.session.user, books: error})
  }
})

module.exports = router