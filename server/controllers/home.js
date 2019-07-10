const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const userModel = require('../models/user')
const categoryModel = require('../models/category')

module.exports = {
  index: async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`
  },
  home: async (ctx, next) => {
    console.log(ctx.request.query)
    console.log(ctx.request.querystring)
    ctx.response.body = '<h1>HOME page</h1>'
  },
  homeParams: async (ctx, next) => {
    console.log(ctx.params)
    ctx.response.body = '<h1>HOME page /:id/:name</h1>'
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
          info: '数据库连接出错！'
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
