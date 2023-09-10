const express = require('express')
const router = express.Router()
const sequelize = require('../../models/index')
const booktest  = require('../../models/mysql/booktest')



router.use((req, res, next) => {
  console.log('requestTime: ', new Date(new Date().getTime() + 8 * 60 * 60 * 1000)) //取得現在時間（台灣時間）
  next()  // 呼叫 next() 執行下一個函式
})


// define the book page route by get method
router.get('/', async (req, res) => {

  sequelize.sync({ force: true }).then(() => {
    booktest.findAll().then(booktest => {
      console.log("All booktest:", JSON.stringify(booktest, null, 4));
    })
  })

  // try {
  //   // 建立與數據庫的連接

  // } catch (error) {
  //   console.error('連接數據庫時出現錯誤：', error)
  // }

  // res.send('Get a book')
  res.render('page',{'text': 'Get a book'})
})


// define the book route by post method
router.post('/', async (req, res) => {

  try {

  } catch (error) {
    console.error('連接數據庫時出現錯誤：', error)
  }

  // res.send('Post a book')
  res.render('page',{'text': 'Post a book'})
})

// define the book route by delete method
router.delete('/', async (req, res) => {

  try {

  } catch (error) {
    console.error('連接數據庫時出現錯誤：', error)
  }

  // res.send('Delete the book')
  res.render('page',{'text': 'Delete the book'})
})

module.exports = router