const { body } = require('express-validator') // 載入套件

module.exports = (req, res) => [
	body('bookName')
	.exists({ checkFalsy: true })
	.withMessage('缺少 bookName ')
	.isNumeric()
	.withMessage('bookName 需要為文字')
]