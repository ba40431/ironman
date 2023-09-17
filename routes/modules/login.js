const express = require('express')
const router = express.Router()
const { user } = require('../../models/index')
const passwordUtils = require('../../utils/passwordUtils')

router.get('/', (req, res) => {
  
  res.render('login',{error:null})
})

// 處理 POST 請求，驗證登入
router.post('/', async (req, res) => {
  const { username, password } = req.body // 從 POST 請求中獲取用戶名和密碼
  let userData
  try{
    userData = await user.findOne({
      where: {
        username: username,
      }
    ,raw: true})
  }catch(error){
    return console.error("An error occurred:", error)
  }

  if(!userData){
    return res.render('login', { 'error': 'Account not found' }) 
  } 

  if (username !== userData.username || !await passwordUtils.compare(password, userData.password)){
    return res.render('login', { 'error': 'Invalid username or password.' }) 
  }
  // 在這裡您可以實現用戶驗證邏輯，例如檢查用戶名和密碼是否有效
  if (username === userData.username && await passwordUtils.compare(password, userData.password)) {
    // 登入成功
    req.session.userId = userData.id
    req.session.user = userData.username // 在會話中存儲用戶信息

    res.redirect('/') // 登入成功後重定向到主頁或其他頁面
  } else {
    // 登入失敗
    return res.render('login', { 'error': 'Invalid username or password' }) // 顯示錯誤信息
  }
})


module.exports = router