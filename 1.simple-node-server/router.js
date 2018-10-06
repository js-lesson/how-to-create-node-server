const router = {
  api: {},
  use: (url, action) => {
    router.api[url] = action;
  }
};

module.exports = router;