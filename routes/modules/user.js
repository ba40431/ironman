const express = require('express')
const router = express.Router()
const { sequelize, user } = require('../../models/index')

// router.get('/', async (req, res) => {

//   res.send('Get a user')
// })


router.post('/', async (req, res) => {

  res.send('Post a user')
})

router.put('/', async (req, res) => {

  const username = req.body.username
  const password = req.body.password

  res.send('Put a user')
  // if (username === 'your_username' && password === 'your_password') {
  //   res.cookie('username', username)

  //   res.render('page',{'text': 'Get a book'})
  //   // res.redirect('/dashboard')
  // } else {
  //   // res.redirect('/login-failed')

  //   res.render('page',{'text': 'Get a book failed'})
  // }

  res.send('Put a user')
})

// define the book route by delete method
router.delete('/:id', async (req, res) => {

  res.send('Delete the user')
})

module.exports = router