const userModel = require('../models/user')
module.exports = {
  register: async (name, pwd) => {
    let data
    if (name === 'ikcamp' && pwd === '123456') {
      data = `Hello， ${name}！`
    } else {
      data = '账号信息错误'
    }
    return data
  },
  getUserByName: async (name) => {
    let data = userModel.getUserByName(name)
  }
}
