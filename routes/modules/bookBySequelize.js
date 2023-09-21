const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator') // 載入套件
// const bookRules = require('../../validations/bookRule')
const BookController = require('../../controllers/bookController')
const bookController = new BookController()

const _ = require('lodash')
const dayjs = require('dayjs')



router.use((req, res, next) => {
  // console.log('requestTime: ', new Date(new Date().getTime() + 8 * 60 * 60 * 1000)) //取得現在時間（台灣時間）
  console.log(`requestTime:` ,dayjs().format('YYYY-MM-DD HH:mm:ss'))
  next()  // 呼叫 next() 執行下一個函式
})


// define the book route by post method
router.post('/',[check('bookName').exists({ checkFalsy: true }).withMessage('缺少 bookName ')],bookController.createBook)
router.delete('/',bookController.deleteBook)

module.exports = router