const mongoose = require('../config/db')
const categorySchema = require('../schema/categorySchema')

let Category = mongoose.model('Category', categorySchema)
module.exports = {
  getCatList: () => Category.find(),
  getCatById: (id) => Category.find({
    _id: id
  }),
  update: (id, name) => Category.findByIdAndUpdate(id, {
    $set: {
      name: name
    }
  }, {
    new: true
  }),
  delete: (id) => Category.deleteOne({
    _id: id
  }),
  add: (name) => Category.create({
    name: name
  })
}
