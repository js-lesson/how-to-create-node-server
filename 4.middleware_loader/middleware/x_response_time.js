module.exports = async (ctx, next) => {
  const start = Date.now();
  console.log('response enter');
  await next();
  console.log('response leave');
  const diff = Date.now() - start;
  ctx.set('new-x-response-time', diff + 'ms');
};