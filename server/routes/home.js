const router = require('koa-router')()
const homeController = require('../controllers/home')

module.exports = (app) => {
  router.get('/', homeController.index)

  router.get('/home', homeController.home)
  router.get('/home/:id/:name', homeController.homeParams)
  // 向某文章添加评论
  router.post('/comment', homeController.addComment)
  // 获取特定分类的所有文章
  router.get('/specCatList', homeController.getConListByCat)
  // 获取所有分类
  router.get('/catList', homeController.getCatList)
  // 登陆
  router.post('/user', homeController.postUserAuth)

  router.post('/user/register', homeController.register)

  // 挂载到router实例对象上，同时会让所有的
  // auth的请求路径前面加上'/auth'的请求路径
  router.use('/auth', router.routes())

  app.use(router.routes())
    .use(router.allowedMethods())
}
