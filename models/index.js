const Sequelize = require('sequelize')

const sequelize = new Sequelize('ironman', process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOSTNAME,
    dialect: 'mysql'
})

// 引入 booktest 模型
const booktest = require('./mysql/booktest')(sequelize, Sequelize)
const book = require('./mysql/book')(sequelize, Sequelize)
const user = require('./mysql/user')(sequelize, Sequelize)



module.exports = {
  booktest,
  book,
  user
}