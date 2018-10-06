module.exports = async (ctx, next) => {
  console.log('authorization enter');
  const { my_token } = ctx.header;
  if (my_token === '123') {
    await next();
  } else {
    ctx.body = 'sorry, no auth';
  }
  console.log('authorization leave');
};