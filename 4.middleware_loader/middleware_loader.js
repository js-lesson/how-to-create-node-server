const walk = require('walk');

module.exports = () => {
  return new Promise((resolve, reject) => {
    const walker = walk.walk("./middleware", null);
    const middlewares = {};

    walker.on("file", function (root, fileStats, next) {
      const { name } = fileStats;
      console.log(name);
      const filename = name.substring(0, name.lastIndexOf('.'));
      middlewares[filename] = require(`./middleware/${filename}`);
      next();
    });

    walker.on("errors", function (root, nodeStatsArray, next) {
      reject('middleware loader error');
      next();
    });

    walker.on("end", function () {
      resolve(middlewares);
    });
  });
};

