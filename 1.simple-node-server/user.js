const router = require('./router');

router.use('/user', (req, res) => {
  res.write('router: get user data');
  res.end();
});