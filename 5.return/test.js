

function timeout() {
  console.log(2);
  return function () {
    console.log(4);
  }
}

console.log(1);
setTimeout(timeout(), 0);
console.log(3);


// function User(name, age) {
//   this.username = name;
//   this.age = age;
// }
//
// const user = new User('zhangsan', 20);
//
// console.log(user.username);
// console.log(user.age);
//
//
// function add(a, b) {
//   return a + b;
// }