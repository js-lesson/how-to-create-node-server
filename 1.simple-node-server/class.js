const router = require('./router');

router.use('/class', (req, res) => {
  res.write('router: get class data');
  res.end();
});
