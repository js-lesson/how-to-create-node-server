const Koa = require('koa');
const router = require('koa-router')({prefix: '/api'});
const bodyParser = require('koa-bodyparser');
const module_loader = require('./module_loader');

const app = new Koa();

app.use(bodyParser());

// RESTful,  get(R) post(C) put(U) delete(D)

// 中间件: 统一
app.use(async (ctx, next) => {
  const start = Date.now();
  console.log('response enter');
  await next();
  console.log('response leave');
  const diff = Date.now() - start;
  // console.log(`URL: ${ctx.originalUrl}, time: ${diff}`);
  ctx.set('X-Response-Time', diff + 'ms');
});

module_loader(router);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3210);