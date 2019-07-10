const userModel = require('../models/user')
const categoryModel = require('../models/category')
const contentModel = require('../models/content')

module.exports = {
  usrList: async (ctx, next) => {
    let userList = await userModel.getUserList()
    if (userList !== null) {
      // 查到
      ctx.response.body = {
        success: true,
        data: userList
      }
    } else {
      ctx.response.body = {
        success: false,
        info: '查询失败'
      }
    }
  },
  getCatList: async (ctx, next) => {
    let catList = await categoryModel.getCatList()
    if (catList !== null) {
      // 查到
      ctx.response.body = {
        success: true,
        data: catList
      }
    } else {
      ctx.response.body = {
        success: false,
        info: '查询失败'
      }
    }
  },
  getConList: async (ctx, next) => {
    let contentList = await contentModel.getContentAll()
    if (contentList !== null) {
      // 查到
      ctx.response.body = {
        success: true,
        data: contentList
      }
    } else {
      ctx.response.body = {
        success: false,
        info: '查询失败'
      }
    }
  }
}
