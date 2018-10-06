const Koa = require('koa');
const router = require('koa-router')({prefix: '/api'});
const bodyParser = require('koa-bodyparser');

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

router.get('/user/:id', (ctx) => {
  const { id } = ctx.params;
  const { start, count } = ctx.query;
  // sql => database
  const { my_token } = ctx.header;
  ctx.body = {start, count, my_token};
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
});

router.post('/user', (ctx) => {
  console.log(ctx.request.body);
  ctx.body = {id: 1, code: 200};
});

// 中间件: 针对某api
router.get('/class', async (ctx, next) => {
  console.log('class enter');
  await next();
  console.log('class leave');
}, (ctx) => {
  console.log('class action');
  ctx.body = 'koa: get class data';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3210);