// const Mysql = require('../config/mysqlConnection')
// const mysql = new Mysql().createConnection()
const { book,user } = require('../models/index')

class BookRepository {
  constructor() {
  }

  async createBook(bookName, userId) {
    try {
      return  await book.create({ bookName: bookName, memberId: userId }, { raw: true })
      
    }catch(error){
      throw new Error(error)
    }
  }

  async selectBook(userId) {
    try {
      return  await book.findAll({where:{memberId: userId},raw: true})
      
    }catch(error){
      throw new Error(error)
    }
  }

  async updateBook() {
    try {
      return  
      
    }catch(error){
      throw new Error(error)
    }
  }

  async deleteBook(id) {
    try {
      return  await book.destroy({where: {id : id}})
      
    }catch(error){
      throw new Error(error)
    }
  }

}

module.exports = BookRepository
