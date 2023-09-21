const Sequelize = require('sequelize')

const sequelize = new Sequelize('ironman', process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOSTNAME,
    dialect: 'mysql'
})

// 引入資料模型
const book = require('./mysql/book')(sequelize, Sequelize)
const user = require('./mysql/user')(sequelize, Sequelize)



module.exports = {
  book,
  user
}