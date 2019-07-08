const mongoose = require('../config/db')
const userSchema = require('../schema/userSchema')

let User = mongoose.model('User', userSchema)
module.exports = {
  getUserByName: (name) => User.findOne({
    username: name
  }, (err, user) => {
    if (err) return 'DB error!'
    return user
  })
}
