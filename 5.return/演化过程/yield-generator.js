
function ajax() {
  setTimeout(() => {
    gen.next('ajax data');
  }, 2000);
}

function* generator() {
  const data = yield ajax();
  console.log(data);
  yield 2;
}

const gen = generator();

gen.next();
