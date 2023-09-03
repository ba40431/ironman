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

// simple query
connection.query(
  'SELECT * FROM `booktest`',
  (err, results, fields) => {
    console.log(results) // results contains rows returned by server
  }
)