const {Success, Error} = require('../../util/message');
const {ERROR_CODE} = require('../../util/const');
// const dao = require('./user.dao');

async function getList(ctx) {
  console.log('user get list');
  const ret = [
      {name: 'zhangsan'},
      {name: 'lisi'},
      {name: 'wangwu'},
    ];

  // const users = await dao.getList();

  ctx.body = new Success(ret);

  // ctx.body = {
  //   code: 500,
  //   message: 'db error'
  // };
}

async function add(ctx) {
  // sql => db => id
  throw new Error(ERROR_CODE.DB_ERROR, 'throw error');
  // ctx.body = new Error(ERROR_CODE.DB_ERROR, 'sql error');
}

module.exports = {getList, add};