
function test(a, cb) {
  cb();
  return a;
}

function callback() {
  console.log('i am callback');
  return function () {
    console.log('i am subcallback');
  }
}

function add(a, b) {
  return a + b;
}

let c = add(1, 2);

// console.log(test(123, callback));

setTimeout(callback(), 1000);