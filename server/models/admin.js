// 导入数据库
const mongoose = require('../config/db')
// 导入schema
const contentSchema = require('../schema/contentSchema')

let Content = mongoose.model('Content', contentSchema)

module.exports = {
  findByTitle: (title) => Content.findOne({
    title: title
  }, (err, content) => {
    if (err) return 'error'
    return content
  })
}
