const mongoose = require('../config/db')
const contentSchema = require('../schema/contentSchema')

let Content = mongoose.model('Content', contentSchema)
module.exports = {
  getContentByCatId: (id) => Content.find({
    'category': id
  }),
  getContentAll: () => Content.find(),
  // 修改并返回修改后的结果
  update: (id, comment) => Content.findByIdAndUpdate(id, {
    $push: {
      comment: comment
    }
  }, {
    new: true
  }),
  delete: (id) => Content.deleteOne({
    _id: id
  }),
  // 后台修改博文
  updateCon: (data) => Content.findByIdAndUpdate(data.id, {
    $set: {
      title: data.title,
      category: data.category,
      description: data.description,
      composition: data.composition
    }
  }, {
    new: true
  }),
  add: (data) => Content.create(data)
}
