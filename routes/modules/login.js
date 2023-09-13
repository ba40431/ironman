const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('login')
})

// 處理 POST 請求，驗證登入
router.post('/', (req, res) => {
  const { username, password } = req.body // 從 POST 請求中獲取用戶名和密碼

  // 在這裡您可以實現用戶驗證邏輯，例如檢查用戶名和密碼是否有效

  if (username === 'abby' && password === 'abby') {
    // 登入成功
    req.session.user = username // 在會話中存儲用戶信息
    res.redirect('/') // 登入成功後重定向到主頁或其他頁面
  } else {
    // 登入失敗
    res.render('login', { error: 'Invalid username or password' }) // 顯示錯誤信息
  }
})


module.exports = router