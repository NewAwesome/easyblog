const router = require('koa-router')()
const adminController = require('../controllers/admin')

module.exports = (app) => {
  // 新增类型
  router.post('/addCat', adminController.addCat)
  // 根据id删除类型
  router.post('/deleteCat', adminController.deleteById)
  // 根据id修改类型
  router.post('/updateCat', adminController.updateCatById)
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
