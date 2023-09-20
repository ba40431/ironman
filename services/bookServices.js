const BookRepository = require('../repositories/BookRepository')
const bookRepository = new BookRepository()

class BookService {
  constructor() {
  }

  async createBook(bookName, userId) {
    try {
      return  await bookRepository.createBook(bookName, userId)
      
    }catch(error){
      throw new Error(error)
    }
  }

  async selectBook(userId) {
    try {
      return  await bookRepository.selectBook(userId)
      
    }catch(error){
      throw new Error(error)
    }
  }

  async updateBook() {
    try {
      return  await bookRepository.updateBook()
      
    }catch(error){
      throw new Error(error)
    }
  }

  async deleteBook(id) {
    try {
      return  await bookRepository.deleteBook(id)
      
    }catch(error){
      throw new Error(error)
    }
  }

}

module.exports = BookService
