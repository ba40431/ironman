require('dotenv').config({ path: './config/env/local.env' })

const chai = require('chai')
const BookController = require('../controllers/bookController')
const bookController = new BookController()

const expect = chai.expect

describe('Book Controller', () => {
  it('should create a book successfully when validation passes', async () => {
    // 创建一个模拟的 Express 请求对象和响应对象
    const req = {
      body: {
        bookName: 'Test Book',
      },
      session: {
        userId: 1,
      },
    }
    const res = {
      status: function (statusCode) {
        this.statusCode = statusCode
        return this
      },
      json: function (data) {
        this.responseData = data
      },
      redirect: function (path) {
        this.redirectPath = path
      },
    }

    // 调用你的控制器方法
    await bookController.createBook(req, res)

    // 断言预期的响应
    expect(res.redirectPath).to.equal('/')
  })

  it('should handle validation errors correctly', async () => {
    // 创建一个模拟的 Express 请求对象和响应对象，这次模拟有验证错误
    const req = {
      body: {},
      session: {
        userId: 1,
      },
    }
    const res = {
      status: function (statusCode) {
        this.statusCode = statusCode;
        return this;
      },
      json: function (data) {
        this.responseData = data;
      },
    }

    // 调用你的控制器方法
    await bookController.createBook(req, res)

    // 断言预期的响应
    expect(res.statusCode).to.equal(400)
  })
})
