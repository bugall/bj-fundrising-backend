import Router from 'koa-router'
import User from './controller/user'
import Payment from './controller/payment'
import Wallet from './util/wallet'

const user = new User()
const payment = new Payment()
const router = new Router()

/**
 * @api {GET} /wechat/payment/callback 微信支付回调
 * @apiName 微信支付回调
 * @apiGroup Payment
 * @apiDescription 微信支付的回调
 * */
router.get('/wechat/payment/callback', async (ctx, next) => { })

/**
 * @api {GET} /zfb/payment/callback 支付宝支付回调
 * @apiName 支付宝支付回调
 * @apiGroup Payment
 * @apiDescription 支付宝支付的回调
 * */
router.get('/zfb/payment/callback', async (ctx, next) => { })

/**
 * @api {POST} /user/signin 新用户注册
 * @apiName 新用户注册
 * @apiGroup  User
 * @apiDescription 新用户注册
 * @apiParam {String} username 用户名
 * @apiParam {String} password 用户名字
 * @apiParam {String} realName 真实的用户名
 * @apiParam {String} idCard idCard
 * @apiParam {String} mobile 手机号
 * @apiSuccessExample {json} Success-Reponse
 * {
 *      result: <id>,
 *      error: <errorCode>
 * }
 * */
router.post('/user/signin', async (ctx, next) => {
  const data = await user.signin(ctx.request.body)
  ctx.body = data
  next()
})

// 获取登录态
router.get('/user/login/status', async (ctx, next) => {})

// 查询支付是否成功
router.get('/payment/status', async (ctx, next) => {})

// 查询支付历史
router.get('/payment/user/:userid/history', async (ctx, next) => {})

export default router
