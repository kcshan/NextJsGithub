const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const PORT = 3001

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  // router.get('/test/:id', (ctx) => {
  //   // ctx.body = `<p>request /test ${ctx.params.id}</p>`
  //   ctx.body = { success: true }
  //   ctx.set('Content-Type', 'application/json')
  // })

  server.use(async (ctx, next) => {
    await next()
  })

  // server.use(async (ctx, next) => {
  //   ctx.body = '<span>Koa Render3</span>'
  // })

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  // server.use(router.routes())

  server.listen(PORT, () => {
    console.log(`koa server is listening at port ${PORT}`)
  })
})