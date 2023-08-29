const express = require('express')
const router = require('./routes')
const app = express()
const port = 3000

app.use(router)
app.use(express.static('public'))
app.set('views',__dirname + '/public/views')
app.set('view engine', 'ejs')


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})