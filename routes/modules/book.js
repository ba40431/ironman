const express = require('express')
const router = express.Router()


// define the book page route by get method
router.get('/', (req, res) => {
  res.send('Get a book')
})
// define the book route by post method
router.post('/', (req, res) => {
  res.send('Post a book')
})

// define the book route by get method
router.delete('/', (req, res) => {
  res.send('Delete the book')
})

module.exports = router