
const {Error} = require('../util/message');
const {ERROR_CODE} = require('../util/const');

module.exports = async (ctx, next) => {
  console.log('error_handler enter');
  try {
    await next();
  } catch (e) {
    console.error('error', e);
    if (e.error_code) {
      ctx.body = e;
    } else {
      ctx.body = new Error(ERROR_CODE.SYS_ERROR, e.message);
    }
  }
  console.log('error_handler leave');
};