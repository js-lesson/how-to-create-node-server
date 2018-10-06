function test1 () {
  console.log('test1 enter');
  test2();
  console.log('test1 leave');
}

function test2 () {
  console.log('test2 enter');
  action();
  console.log('test2 leave');
}

function action () {
  console.log('action');
}

test1();