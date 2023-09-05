const express = require('express')
const router = express.Router()
// const Mysql = require('../../config/mysqlConnection')
// const mysql = new Mysql().createConnection()
const mysqlConnection = require('../../config/mysqlConnection')

router.use((req, res, next) => {
  console.log('requestTime: ', new Date(new Date().getTime() + 8 * 60 * 60 * 1000)) //取得現在時間（台灣時間）
  next()  // 呼叫 next() 執行下一個函式
})


// define the book page route by get method
router.get('/', async (req, res) => {

  const mysql = await createConnection()

  await mysql.execute('SELECT * FROM `booktest`')

  // res.send('Get a book')
  res.render('page',{'text': 'Get a book'})
})
// define the book route by post method
router.post('/', async (req, res) => {

  const mysql = await createConnection()

  await mysql.execute('UPDATE `booktest` SET `bookName` = "testBook1" WHERE id = 1')

  // res.send('Post a book')
  res.render('page',{'text': 'Post a book'})
})

// define the book route by delete method
router.delete('/', async (req, res) => {

  const mysql = await createConnection()

  await mysql.execute('DELETE FROM `booktest`  WHERE id = 1')

  // res.send('Delete the book')
  res.render('page',{'text': 'Delete the book'})
})

module.exports = router