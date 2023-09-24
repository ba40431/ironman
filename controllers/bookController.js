const BookService = require('../services/bookServices')
const bookService = new BookService()
const { validationResult } = require('express-validator') // 載入套件

class BookController {
  constructor() {
  }

  async createBook(req, res, next) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      // Handle validation errors
      const errorMessages = errors.array().map(error => error.msg)
      return res.status(400).json({ errors: errorMessages })
    }
    const bookName = req.body.bookName // 設定一個要新增的書名

    try {
      await bookService.createBook(bookName, req.session.userId)

      return res.redirect('/')
    }catch(error){
      return res.status(400).json({ errors: error })
    }
  }

  async selectBook(req, res, next) {
    try {
      const books = await bookService.selectBook(req.session.userId)

      return res.render('index',{'username': req.session.user, books: books})
    }catch(error){
      return res.status(400).json({ errors: error })
    }
  }

  async updateBook(req, res, next) {
    try {
      return  await bookService.updateBook()
      
    }catch(error){
      return res.status(400).json({ errors: error })
    }
  }

  async deleteBook(req, res, next) {
    const id = req.body.id
    try {
      await bookService.deleteBook(id)

      return  res.redirect('/')
    }catch(error){
      return res.status(400).json({ errors: error })
    }
  }

}

module.exports = BookController
