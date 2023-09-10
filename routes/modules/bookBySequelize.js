const express = require('express')
const router = express.Router()
const { sequelize, booktest } = require('../../models/index')



router.use((req, res, next) => {
  console.log('requestTime: ', new Date(new Date().getTime() + 8 * 60 * 60 * 1000)) //取得現在時間（台灣時間）
  next()  // 呼叫 next() 執行下一個函式
})


// define the book page route by get method
router.get('/', async (req, res) => {

  try {
    await sequelize.sync();
    const books = await booktest.findAll();
    console.log("All books:", JSON.stringify(books, null, 4));
  } catch (error) {
      console.error("An error occurred:", error);
  }

  // res.send('Get a book')
  res.render('page',{'text': 'Get a book'})
})


// define the book route by post method
router.post('/', async (req, res) => {

  try {
    await sequelize.sync();
    const books = await booktest.findAll();
    console.log("All books:", JSON.stringify(books, null, 4));
  } catch (error) {
      console.error("An error occurred:", error);
  }

  // res.send('Post a book')
  res.render('page',{'text': 'Post a book'})
})

// define the book route by delete method
router.delete('/', async (req, res) => {

  try {
    await sequelize.sync();
    const books = await booktest.findAll();
    console.log("All books:", JSON.stringify(books, null, 4));
  } catch (error) {
      console.error("An error occurred:", error);
  }

  // res.send('Delete the book')
  res.render('page',{'text': 'Delete the book'})
})

module.exports = router