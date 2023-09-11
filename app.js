const express = require('express')
const router = require('./routes')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

app.set('views',__dirname + '/public/views') // 樣版引擎所在的資料夾
app.set('view engine', 'ejs') // 樣版的屬性

app.use(express.json())
// 使用body-parser中間件處理POST請求數據
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser()); // 使用cookie-parser中間件
app.use(router)
app.use(express.static('public'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})