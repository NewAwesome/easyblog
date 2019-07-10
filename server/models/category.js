const mongoose = require('../config/db')
const categorySchema = require('../schema/categorySchema')

let Category = mongoose.model('Category', categorySchema)
module.exports = {
  getCatList: () => Category.find()
}
