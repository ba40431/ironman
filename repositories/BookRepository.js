const Mysql = require('../config/mysqlConnection')
const mysql = new Mysql().createConnection()

class BookRepository {
  constructor() {
  }

  async createBook() {
    const [rows, fields] = await mysql.execute('INSERT INTO `booktest` (`bookName`) VALUES ("testBook")')
    return 
  }

  async selectBook() {
    const [rows, fields] = await mysql.execute('SELECT * FROM `booktest`')
    return 
  }

  async updateBook() {
    const [rows, fields] = await mysql.execute('UPDATE `booktest` SET `bookName` = "testBook1" WHERE id = 1')
    return 
  }

  async deleteBook() {
    const [rows, fields] = await mysql.execute('DELETE FROM `booktest`  WHERE id = 1')
    return 
  }

}

module.exports = BookRepository
