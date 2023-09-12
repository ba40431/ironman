const Sequelize = require('sequelize')

const sequelize = new Sequelize('book', process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOSTNAME,
    dialect: 'mysql'
})

// 引入 booktest 模型
const booktest = require('./mysql/booktest')(sequelize, Sequelize)



module.exports = {
  booktest
}