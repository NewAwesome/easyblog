const mongoose = require('mongoose')
var categorySchema = new mongoose.Schema({
  id: Number,
  name: String
}, {
  versionKey: false
})
module.exports = categorySchema
