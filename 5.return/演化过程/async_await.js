function ajax() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({name: 'zhangsan'});
    }, 2000);
  });
}

async function test() {
  const data = await ajax();
  console.log(data);
}

test();

