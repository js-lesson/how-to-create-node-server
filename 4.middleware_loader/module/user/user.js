async function getList(ctx) {
  console.log('user get list');
  ctx.body = "module_load: get user list";
}

async function add(ctx) {
  ctx.body = "module_load: add user";
}

module.exports = {getList, add};