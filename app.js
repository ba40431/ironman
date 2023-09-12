require('dotenv').config({ path: './config/env/local.env' })

const express = require('express')
const router = require('./routes')

const app = express()
const port = 3000

app.set('views',__dirname + '/public/views') // 樣版引擎所在的資料夾
app.set('view engine', 'ejs') // 樣版的屬性

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)
app.use(express.static('public'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})