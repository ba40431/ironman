const Sequelize = require('sequelize')

const sequelize = new Sequelize('book', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

// 引入 booktest 模型
const booktest = require('./mysql/booktest')(sequelize, Sequelize)



module.exports = {
  booktest
}