const AdminService = require('../service/admin')

module.exports = {
  getData: async (ctx, next) => {
    let data = await AdminService.findByTitle('前端工程化')
    ctx.response.body = data
  }
}
