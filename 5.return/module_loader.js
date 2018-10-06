const walk = require('walk');

module.exports = (router, middlewares) => {
  const walker = walk.walk("./module", null);

  walker.on("directories", function (root, dirStatsArray, next) {
    dirStatsArray.forEach(dir => {
      console.log(dir.name);
      LoadModule(dir.name);
    });
    next();
  });

  walker.on("errors", function (root, nodeStatsArray, next) {
    next();
  });

  walker.on("end", function () {
    console.log("all done");
  });

  function LoadModule(moduleName) {
    const ctrlModule = require(`./module/${moduleName}/${moduleName}.js`);
    const confModule = require(`./module/${moduleName}/${moduleName}.json`);
    console.log(ctrlModule, confModule);

    confModule.route.forEach(conf => {
      console.log(conf);
      const [method, url, actionName] = conf.split(' ');
      console.log(method, url, actionName);
      // router.get('/user', ctrl.getList);
      const [middlewareName, realActionName] = actionName.split('|');
      if (realActionName) {
        router[method](url, middlewares[middlewareName], ctrlModule[realActionName]);
      } else {
        router[method](url, ctrlModule[actionName]);
      }
    });
  }
};

