const router = require('koa-router')()
const adminController = require('../controllers/admin')

module.exports = (app) => {
  // 获取所有用户
  router.get('/usrList', adminController.usrList)
  // 获取所有分类
  router.get('/catList', adminController.getCatList)
  // 查询所有博文
  router.get('/conList', adminController.getConList)

  // 挂载到router实例对象上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径
  router.use('/manage', router.routes())

  app.use(router.routes())
    .use(router.allowedMethods())
}
