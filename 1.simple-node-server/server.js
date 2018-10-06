const http = require('http');
const router = require('./router');
const user = require('./user');
const classModule = require('./class');

const server = http.createServer((req, res) => {
  // 1. 区分请求
  // 2. 根据不同的请求, 返回不同的数据
  console.log('url', req.url);

  const func = router.api[req.url];
  if (func) {
    func(req, res);
  } else {
    res.write('no this api');
    res.end();
  }
});

server.listen(3210);