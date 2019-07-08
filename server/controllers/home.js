const homeService = require('../service/home')

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
      <form action="/user/register" method="post">
        <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
        <br/>
        <input name="password" type="text" placeholder="请输入密码：123456"/>
        <br/> 
        <button>GoGoGo</button>
      </form>
    `
  },
  register: async (ctx, next) => {
    let {
      name,
      password
    } = ctx.request.body
    let data = await homeService.register(name, password)
    ctx.response.body = data
  },
  // login
  postUserAuth: async (ctx, next) => {
    // post请求数据在request的body体
    const data = ctx.request.body
    // 返回结果存放在response.body中，格式为{success:xx,info:''}
    ctx.response.body = await this.homeService.getUserByName(data.name)
  }
}
