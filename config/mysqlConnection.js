// get the client
const mysql = require('mysql2')

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
	port: 3306,
  user: 'root',
  database: 'book',
	password: ''
})

connection.query(
  'INSERT INTO `booktest` (`bookName`) VALUES ("testBook")',
  (err, results, fields) => {
    console.log(results) 
  }
)

connection.query(
  'UPDATE `booktest` SET `bookName` = "testBook" WHERE id = 1',
  (err, results, fields) => {
    console.log(results)
  }
)

connection.query(
  'SELECT * FROM `booktest`',
  (err, results, fields) => {
    console.log(results)
  }
)