const AdminModel = require('../models/admin')
module.exports = {
  findByTitle: (title) => {
    let data = AdminModel.findByTitle(title)
    if (data === 'error') {
      return '查询失败'
    } else {
      return data
    }
  }
}
