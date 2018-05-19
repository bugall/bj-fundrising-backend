import Koa from 'koa'
import Router from './router'
import qs from 'body-qs'
import bodyParser from 'koa-bodyparser'

const app = new Koa();
qs(app)
app.use(bodyParser())
app.listen(3000)
