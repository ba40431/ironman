const express = require('express')
const router = express.Router()
const { book,user } = require('../../models/index')

const { check, validationResult } = require('express-validator') // 載入套件
// const bookRules = require('../../validations/bookRule')
const _ = require('lodash')
const dayjs = require('dayjs')



router.use((req, res, next) => {
  // console.log('requestTime: ', new Date(new Date().getTime() + 8 * 60 * 60 * 1000)) //取得現在時間（台灣時間）
  console.log(`requestTime:` ,dayjs().format('YYYY-MM-DD HH:mm:ss'))
  next()  // 呼叫 next() 執行下一個函式
})


// define the book page route by get method
router.get('/', async (req, res) => {

  try {
    const books = await book.findAll({where:{
      merberId: req.session.userId
    },raw: true})

    res.render('index',{'username': req.session.user, books: books})
  } catch (error) {
    res.render('index',{'username': req.session.user, books: error})
  }

})


// define the book route by post method
router.post('/', [
  check('bookName')
    .exists({ checkFalsy: true })
    .withMessage('缺少 bookName ')
], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    // Handle validation errors
    const errorMessages = errors.array().map(error => error.msg)

    return res.status(400).json({ errors: errorMessages })
  }
  const bookName = req.body.bookName // 設定一個要新增的書名


  try {
    const books = await book.create({ bookName: bookName, memberId: req.session.userId }, { raw: true })

    res.redirect('/')
  } catch (error) {
      console.error("An error occurred:", error)
  }


})

// define the book route by delete method
router.delete('/', async (req, res) => {
  const id = req.body.id
  

  try {
    const books = await book.destroy({
      where: {
        id : id
      }
  })
  res.redirect('/')
  } catch (error) {
      console.error("An error occurred:", error)
  }

  // res.send('Delete the book')
  
})

module.exports = router