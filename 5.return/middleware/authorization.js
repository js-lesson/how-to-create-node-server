const {ERROR_CODE} = require('../util/const');
const {Error} = require('../util/message');

module.exports = async (ctx, next) => {
  console.log('authorization enter');
  const { my_token } = ctx.header;
  if (my_token === '123') {
    await next();
  } else {
    ctx.body = new Error(ERROR_CODE.NO_AUTH);
  }
  console.log('authorization leave');
};