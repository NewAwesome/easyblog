const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const userModel = require('../models/user')
const categoryModel = require('../models/category')
const contentModel = require('../models/content')

module.exports = {
  index: async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`
  },
  home: async (ctx, next) => {
    ctx.response.body = '<h1>HOME page</h1>'
  },
  homeParams: async (ctx, next) => {
    ctx.response.body = '<h1>HOME page /:id/:name</h1>'
  },
  // 添加评论
  addComment: async (ctx, next) => {
    // post请求数据在request的body体
    const data = ctx.request.body
    let specContent = await contentModel.update(data.id, data.comment)
    if (specContent.ok !== null) {
      // 成功
      ctx.response.body = {
        success: true,
        info: '评论成功',
        data: specContent
      }
    } else {
      ctx.response.body = {
        success: false,
        info: '评论失败'
      }
    }
  },
  // getConListByCat 根据类型id获取对应的全部文章
  getConListByCat: async (ctx, next) => {
    let index = parseInt(ctx.query.id)
    let catList = await categoryModel.getCatList()
    if (index == -1) {
      let rs = await contentModel.getContentAll()
      if (rs !== null) {
        rs = rs.map(item => {
          // item.category 处理一下下
          catList.forEach(cat => {
            if (cat._id == item.category) {
              item.category = cat.name
            }
          })
          return item
        })
        ctx.response.body = {
          success: true,
          data: rs
        }
      } else {
        ctx.response.body = {
          success: false,
          info: '暂无文章'
        }
      }
    } else {
      let id = catList[index]['_id']
      let rs = await contentModel.getContentByCatId(id)
      if (rs != false) {
        rs = rs.map(item => {
          // item.category 处理一下下
          catList.forEach(cat => {
            if (cat._id == item.category) {
              item.category = cat.name
            }
          })
          return item
        })
        ctx.response.body = {
          success: true,
          data: rs
        }
      } else {
        ctx.response.body = {
          success: false,
          info: '该分类暂无文章'
        }
      }
    }
  },
  // getCatList
  getCatList: async (ctx, next) => {
    let rs = await categoryModel.getCatList()
    if (rs !== null) {
      rs = rs.map(obj => {
        return obj.name
      })
      ctx.response.body = {
        success: true,
        data: rs
      }
    } else {
      ctx.response.body = {
        success: false,
        info: '无法查询到结果'
      }
    }
  },
  // register
  register: async (ctx, next) => {
    const data = ctx.request.body
    // // 先手动标注不是管理员
    // data.isadmin = false
    // 首先判断一下该用户名是否存在
    let userInfo = await userModel.getUserByName(data.username)
    if (userInfo !== null) {
      ctx.response.body = {
        success: false,
        info: '该用户名已存在！'
      }
    } else {
      // 对新注册用户的密码进行加密
      const salt = bcrypt.genSaltSync(10)
      data.password = bcrypt.hashSync(data.password, salt)
      // 进行插入新用户完成注册
      let insertRs = await userModel.insertUser(data)
      if (insertRs !== null) {
        ctx.response.body = {
          success: true,
          info: '注册成功！'
        }
      } else {
        ctx.response.body = {
          success: false,
          info: '数据库插入出错！'
        }
      }
    }
  },
  // login
  postUserAuth: async (ctx, next) => {
    // post请求数据在request的body体
    const data = ctx.request.body
    let userInfo = await userModel.getUserByName(data.name)
    if (userInfo != null) { // 如果查无此用户会返回null
      if (!bcrypt.compareSync(data.password, userInfo.password)) {
        ctx.response.body = {
          success: false, // success标志位是方便前端判断返回是正确与否
          info: '密码错误！'
        }
      } else { // 如果密码正确
        const userToken = {
          name: userInfo.username,
          id: userInfo.id
        }
        const secret = 'vue-koa-demo' // 指定密钥，这是之后用来判断token合法性的标志
        const token = jwt.sign(userToken, secret) // 签发token
        ctx.response.body = {
          success: true,
          // info: '成功'
          token: token // 返回token
        }
      }
    } else {
      ctx.response.body = {
        success: false,
        info: '用户不存在！' // 如果用户不存在返回用户不存在
      }
    }
  }
}
