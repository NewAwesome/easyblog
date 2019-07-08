const mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
  id: Number,
  username: String,
  password: String,
  isadmin: Boolean
}, {
  versionKey: false
})
module.exports = userSchema
