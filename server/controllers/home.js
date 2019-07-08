// const homeService = require('../service/home')
// const jwtKoa = require('koa-jwt')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const userModel = require('../models/user')

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
  login: async (ctx, next) => {
    ctx.response.body =
      `
      <form action="/auth/user" method="post">
        <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
        <br/>
        <input name="password" type="text" placeholder="请输入密码：123456"/>
        <br/> 
        <button>GoGoGo</button>
      </form>
    `
  },
  // register: async (ctx, next) => {
  //   let {
  //     name,
  //     password
  //   } = ctx.request.body
  //   let data = await homeService.register(name, password)
  //   ctx.response.body = data
  // },
  // login
  postUserAuth: async (ctx, next) => {
    // post请求数据在request的body体
    const data = ctx.request.body
    let userInfo = await userModel.getUserByName(data.name)
    console.log(data.name)
    console.log(userInfo)
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
