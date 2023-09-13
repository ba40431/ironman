const express = require('express')
const router = express.Router()
const requireLogin = require('../../middleware/auth')

router.get('/', requireLogin, (req, res) => {
  res.render('index', {'username': req.session.user})
})

module.exports = router