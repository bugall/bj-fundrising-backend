import Koa from 'koa'
import routers from './router'
import qs from 'koa-qs'
import bodyParser from 'koa-bodyparser'

// For init
import rpc from './util/rpc'

rpc.register({
  name: 'bugall',
  password: 'nijiaoa',
  realName: 'bugall',
  idCard: '123123',
  mobile: '231231'
}).then(result => console.log(result)).catch(err => console.log(err))


const app = new Koa();
qs(app)
app.use(bodyParser())


app.use((ctx, next) => {
  return next().then(() => {
    const tmp = {
      action: ctx.method,
      path: ctx.path,
      params: JSON.stringify(ctx.request.query),
      body: JSON.stringify(ctx.request.body),
      status: ctx.status,
    }
    console.info(`log=INFO;model=http;info=${JSON.stringify(tmp)}`)
  }).catch((err) => {
    console.error(`log=ERROR;model=global;action=all;info=${JSON.stringify(err.stack)}`)
    ctx.status = 500
    ctx.body = {
      message: err.message,
    }
  })
})
app.use(routers.routes(), routers.allowedMethods())
app.listen(3000,'0.0.0.0', () => {
  console.log('🌐   Listening on port: 3000')
})
