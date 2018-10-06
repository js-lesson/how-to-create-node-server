// const userDao = require('../user/user.dao');

async function getOne(ctx) {
  const { id } = ctx.params;
  // const user = await userDao.getOne(1);
  ctx.body = `你正在查询id为${id}的班级信息`;
}

module.exports = {getOne};