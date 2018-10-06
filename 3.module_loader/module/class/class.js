async function getOne(ctx) {
  const { id } = ctx.params;
  ctx.body = `你正在查询id为${id}的班级信息`;
}

module.exports = {getOne};