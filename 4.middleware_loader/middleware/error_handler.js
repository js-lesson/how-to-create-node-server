module.exports = async (ctx, next) => {
  console.log('error_handler enter');
  try {
    await next();
  } catch (e) {
    console.error('error', e);
    ctx.body = e.message;
  }
  console.log('error_handler leave');
};