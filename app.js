const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
// const json = require('koa-json')
// const logger = require('koa-logger')
const app = new Koa()
const home = require('./server/routes/home')
const admin = require('./server/routes/admin')

app.use(bodyParser())

home(app)
admin(app)

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})
