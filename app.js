require('dotenv').config({ path: './config/env/local.env' })

const express = require('express')
const router = require('./routes')
const session = require('express-session')
const app = express()
const port = 3000
const methodOverride = require('method-override')

app.set('views',__dirname + '/views') // 樣版引擎所在的資料夾
app.set(__dirname + '/public') 
app.set('view engine', 'ejs') // 樣版的屬性


app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({
  secret: 'your-secret-key', // 建議將此替換為實際的安全密鑰
  resave: false, // 是否每次都重新保存 session，預設為 true
  saveUninitialized: false, // 是否每次都重新產生 session，預設為 true
  cookie: { secure: false } // 建議在生產環境中將其設置為 true，以使用HTTPS
}))
app.use(router)
app.use(express.static('public'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})