const bcrypt = require('bcrypt')

async function hash(password) {
	const saltRounds = 10
	try {
			const hashedPassword = await bcrypt.hash(password, saltRounds)

			return hashedPassword
	} catch (err) {
			throw new Error('Password hashing failed')
	}
}

function compare(hashedPassword, password) {
    return bcrypt.compare(hashedPassword, password)
}

module.exports = {
    hash,
    compare
}