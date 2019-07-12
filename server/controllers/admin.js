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
  },
  updateCatById: async (ctx, next) => {
    const data = ctx.request.body
    let rs = await categoryModel.update(data.id, data.name)
    if (rs !== null) {
      ctx.response.body = {
        success: true,
        data: rs.name
      }
    } else {
      ctx.response.body = {
        success: false,
        info: '更新失败'
      }
    }
  },
  deleteById: async (ctx, next) => {
    const data = ctx.request.body
    let rs = await categoryModel.delete(data.id)
    if (rs !== null) {
      ctx.response.body = {
        success: true
      }
    } else {
      ctx.response.body = {
        success: false,
        info: '删除失败'
      }
    }
  },
  addCat: async (ctx, next) => {
    const data = ctx.request.body
    let rs = await categoryModel.add(data.name)
    if (rs !== null) {
      ctx.response.body = {
        success: true,
        data: rs
      }
    } else {
      ctx.response.body = {
        success: false,
        info: '添加失败'
      }
    }
  },
  deleteConById: async (ctx, next) => {
    const data = ctx.request.body
    let rs = await contentModel.delete(data.id)
    console.log(rs)
    if (rs !== null) {
      ctx.response.body = {
        success: true
      }
    } else {
      ctx.response.body = {
        success: false,
        info: '删除失败'
      }
    }
  },
  updateConById: async (ctx, next) => {
    const data = ctx.request.body
    let rs = await contentModel.updateCon(data)
    if (rs !== null) {
      ctx.response.body = {
        success: true,
        data: {
          id: rs._id,
          title: rs.title,
          category: rs.category,
          description: rs.description,
          composition: rs.composition
        }
      }
    } else {
      ctx.response.body = {
        success: false,
        info: '更新失败'
      }
    }
  },
  addCon: async (ctx, next) => {
    const data = ctx.request.body
    let rs = await contentModel.add(data)
    if (rs !== null) {
      ctx.response.body = {
        success: true,
        data: rs
      }
    } else {
      ctx.response.body = {
        success: false,
        info: '添加失败'
      }
    }
  }
}
