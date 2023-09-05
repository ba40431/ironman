// 引入 mysql2/promise 模組
const mysql = require('mysql2/promise')

async function mysqlConnection() {
  try {
    // 建立與數據庫的連接
    const connection = await mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      database: 'book',
      password: ''
    })

    return connection; // 返回連接對象

  } catch (error) {
    console.error('連接數據庫時出現錯誤：', error)
  }
}

module.exports = {
  mysqlConnection
}