// 引入koa-router
const router = require('koa-router')()
const AdminController = require('../controllers/admin')
// 暴露为函数，该函数接收app为参数
module.exports = (app) => {
  router.get('/admin', AdminController.getData)
  // 给传入的app注册本路由
  app.use(router.routes()).use(router.allowedMethods())
}
