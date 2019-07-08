const router = require('koa-router')()
const homeController = require('../controllers/home')

module.exports = (app) => {
  router.get('/', homeController.index)

  router.get('/home', homeController.home)

  router.get('/home/:id/:name', homeController.homeParams)

  // 登陆
  router.post('/user', homeController.postUserAuth)

  router.post('/user/register', homeController.register)

  // 挂载到router实例对象上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径
  router.use('/auth', router.routes())

  app.use(router.routes())
    .use(router.allowedMethods())
}
