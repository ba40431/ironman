
function requireLogin(req, res, next) {
  if (req.session && req.session.user) {
    // 用戶已經登入，繼續執行下一個中間件或路由處理程序
    return next()
  } else {
    // 用戶未登入，重定向到登入頁面或其他處理方式
    return res.redirect('/login')
  }
}

module.exports =requireLogin