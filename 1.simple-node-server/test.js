const user = {};

user.name = 'zhangsan1';
user.age = 20;

const key = 'name';

user[key] = 'lisi';

user.showName = function () {
  console.log(this.name);
};


user.showName();

console.log(user.address);
