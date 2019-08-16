const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const session = require('koa-session')
const Redis = require('ioredis')
const koaBody = require('koa-body')

const auth = require('./server/auth')
const api = require('./server/api')
const RedisSessionStore = require('./server/session-store')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// 创建redis client
const redis = new Redis()

const PORT = 3001


app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  server.keys = ['Thomas develop github app']
  const SESSION_CONFIG = {
    key: 'jid',
    // maxAge: 10 * 1000,
    store: new RedisSessionStore(redis)
  }

  server.use(session(SESSION_CONFIG, server))
  server.use(koaBody())

  // // 配置处理github oauth的登录
  auth(server)
  api(server)

  // router.get('/a/:id', async ctx => {
  //   const id = ctx.params.id
  //   await handle(ctx.req, ctx.res, {
  //     pathname: '/a',
  //     query: { id }
  //   })
  //   ctx.respond = false
  // })

  router.get('/api/user/info', async ctx => {
    const user = ctx.session.userInfo
    if (!user) {
      ctx.status = 401
      ctx.body = 'Need Login'
    } else {
      ctx.body = user
      ctx.set('Content-Type', 'application/json')
    }
  })

  server.use(router.routes())

  server.use(async (ctx, next) => {
    ctx.req.session = ctx.session
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.listen(PORT, () => {
    console.log(`koa server is listening at port ${PORT}`)
  })
})