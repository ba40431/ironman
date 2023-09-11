const express = require('express')
const router = express.Router()
const { mysqlConnection } = require('../../config/mysqlConnection')

router.use((req, res, next) => {
  console.log('requestTime: ', new Date(new Date().getTime() + 8 * 60 * 60 * 1000)) //取得現在時間（台灣時間）
  next()  // 呼叫 next() 執行下一個函式
})


// define the book page route by get method
router.get('/', async (req, res) => {

  try {
    // 建立與數據庫的連接
    const connection  = await mysqlConnection()
	  await connection.query('SELECT * FROM `booktest`')

    // 關閉連接
    connection.end()
  } catch (error) {
    console.error('連接數據庫時出現錯誤：', error)
  }

  // res.send('Get a book')
  res.render('page',{'text': 'Get a book'})
})


// define the book route by post method
router.post('/', async (req, res) => {
<<<<<<< HEAD
=======
  console.log(req.body)
>>>>>>> upstream
  const bookName = req.body.bookName // 設定一個要新增的書名

  try {
    // 建立與數據庫的連接
    const connection = await mysqlConnection()
<<<<<<< HEAD
    await connection.query(`INSERT INTO booktest (bookName) VALUES (?)`, bookName)
=======
    await connection.query(`INSERT INTO booktest (bookName) VALUES ('${bookName}')`)
>>>>>>> upstream

    // 關閉連接
    connection.end()
  } catch (error) {
    console.error('連接數據庫時出現錯誤：', error)
  }

  // res.send('Post a book')
  res.render('page',{'text': `add a new book: ${bookName}`})
})

// define the book route by delete method
<<<<<<< HEAD
router.delete('/:id', async (req, res) => { // 設定一個要刪除書名的 id
  const id = req.params.id

  try {
    // 建立與數據庫的連接
    const connection = await mysqlConnection()
    await connection.query(`DELETE FROM booktest  WHERE id = ?`, id)
=======
router.delete('/:id', async (req, res) => {
  const id = req.params.id
  
  try {
    // 建立與數據庫的連接
    const connection = await mysqlConnection()
    await connection.query(`DELETE FROM booktest  WHERE id = ${id}`)
>>>>>>> upstream

    // 關閉連接
    connection.end()
  } catch (error) {
    console.error('連接數據庫時出現錯誤：', error)
  }

  // res.send('Delete the book')
  res.render('page',{'text': `Delete the book number ${id}`})
})

module.exports = router