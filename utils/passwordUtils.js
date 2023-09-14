const bcrypt = require('bcrypt')

function hash(password) {
    const saltRounds = 10
    bcrypt.hash(password, saltRounds, async (err, hash) => {
        return hash
    })
}

function compare(hashedPassword, password) {
    return bcrypt.compare(hashedPassword, password)
}

module.exports = {
    hash,
    compare
  }