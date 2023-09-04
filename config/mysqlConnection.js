async function mysqlConnection() {
  // get the client
  const mysql = require('mysql2/promise')

  // create the connection to database
  const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'book',
    password: ''
  })
  
  // query database
  const [rows1, fields1] = await connection.execute('INSERT INTO `booktest` (`bookName`) VALUES ("testBook")')
  console.log(rows1)

   // query database
   const [rows2, fields2] = await connection.execute('UPDATE `booktest` SET `bookName` = "testBook1" WHERE id = 1')
   console.log(rows2)

    // query database
  const [rows3, fields3] = await connection.execute('SELECT * FROM `booktest`')
  console.log(rows3)

  return 
}

mysqlConnection()