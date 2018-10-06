// promise 是一种规范, q, bluebird
// http request, response
// .then , .success

function ajax() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve({name: 'zhangsan'});
      reject('db error');
    }, 2000);
  });
}

$.get(url, () => {
}, () => {
});

/**
 * Page1: getUserInfo(),  getClass()
 *
 * Page2: getUserInfo(),  getStudent()
 *
 * */

const globalP = getUserInfo();

globalP.then((user) => {
  console.log(user);
});

ajax()
  .then((data) => {
    console.log(data);
  })
  .then()
  .catch(e => {
    console.log(e);
  });

