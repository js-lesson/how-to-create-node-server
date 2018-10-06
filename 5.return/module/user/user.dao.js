async function getOne(id) {
  const sql = 'select * from tuser where id = ?';
  return await connect.executeSql(sql, [id]);
}

async function getList() {
  const sql = 'select * from tuser';
  return await connect.executeSql(sql);
}

module.exports = {getOne, getList};