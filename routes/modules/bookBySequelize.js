const express = require('express')
const router = express.Router()
const { booktest } = require('../../models/index')



router.use((req, res, next) => {
  console.log('requestTime: ', new Date(new Date().getTime() + 8 * 60 * 60 * 1000)) //取得現在時間（台灣時間）
  next()  // 呼叫 next() 執行下一個函式
})


// define the book page route by get method
router.get('/', async (req, res) => {

  try {
    const books = await booktest.findAll({raw: true})
    console.log(books)

  } catch (error) {
      console.error("An error occurred:", error)
  }

  res.render('page',{'text': 'Get a book'})
})


// define the book route by post method
router.post('/', async (req, res) => {
  const bookName = req.body.bookName // 設定一個要新增的書名

  try {
    const books = await booktest.create({ bookName: bookName }, { raw: true })

  } catch (error) {
      console.error("An error occurred:", error)
  }

  // res.send('Post a book')
  res.render('page',{'text': `add a new book: ${bookName}`})
})

// define the book route by delete method
router.delete('/:id', async (req, res) => {
  const id = req.params.id

  try {
    const books = await booktest.destroy({
      where: {
        id : id
      }
  })

  } catch (error) {
      console.error("An error occurred:", error)
  }

  // res.send('Delete the book')
  res.render('page',{'text': `Delete the book number ${id}`})
})

module.exports = router