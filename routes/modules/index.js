const express = require('express')
const router = express.Router()
const { book,user } = require('../../models/index')
const requireLogin = require('../../middleware/auth')

router.get('/', requireLogin, async (req, res) => {

  try {
    // 到資料庫找我們登入時依我們存在 session.userId 使用者，查找是否有書單。
    const books = await book.findAll({where:{
      memberId: req.session.userId
    },raw: true})

    // 將結果回傳至畫面。
    res.render('index',{'username': req.session.user, books: books})
  } catch (error) {
    throw new Error(error)
  }
})

module.exports = router