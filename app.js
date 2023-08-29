const express = require('express')
const router = require('./routes')
const path = require('path')
const app = express()
const port = 3000

app.use(router)
app.use(express.static('public'))
app.set('views',__dirname + '/public/views')
app.set('view engine', 'ejs')

// app.get("/",(req,res)=>{
//   res.render('book');
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})