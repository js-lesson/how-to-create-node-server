const ERROR_CODE = {
  NONE: 0,
  SYS_ERROR: 1,
  DB_ERROR: 2,
  NO_AUTH: 3,
  DESC: {
    0: 'NONE',
    1: 'System Error',
    2: 'Database Error',
    3: 'No Authorization',
  }
};


module.exports = {
  ERROR_CODE
};