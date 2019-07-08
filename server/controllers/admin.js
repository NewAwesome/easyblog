const adminModel = require('../models/admin')

module.exports = {
  getData: async (ctx, next) => {
    let data = await adminModel.findByTitle('前端工程化')
    ctx.response.body = data
  }
}
