const multer = require('koa-multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const { originalname } = file;
    const suffix = originalname.substring(originalname.lastIndexOf('.'));
    cb(null, Date.now() + suffix);
  }
});

const upload = multer({ storage: storage });

module.exports = async (ctx, next) => {
  return upload.single('file')(ctx, next);
};
