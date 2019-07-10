const mongoose = require('mongoose')
var contentSchema = new mongoose.Schema({
  id: Number,
  title: String,
  category: String,
  num: Number,
  user: String,
  comment: [{
    comment: String,
    user: String,
    time: String
  }],
  addtime: String,
  description: String,
  composition: String
}, {
  versionKey: false
})
module.exports = contentSchema
