const Koa = require('koa');
const router = require('koa-router')({prefix: '/api'});
const bodyParser = require('koa-bodyparser');
const module_loader = require('./module_loader');
const middleware_loader = require('./middleware_loader');

const app = new Koa();

app.use(bodyParser());

// RESTful,  get(R) post(C) put(U) delete(D)

middleware_loader().then(middlewares => {
  router.use(middlewares.error_handler);
  router.use(middlewares.x_response_time);
  router.use(middlewares.api_log);
  module_loader(router, middlewares);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3210);