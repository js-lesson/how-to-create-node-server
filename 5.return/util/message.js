const {ERROR_CODE} = require('./const');

class Success {
  constructor(data) {
    this.code = 200;
    this.data = data;
  }
}

class Error {
  constructor(error_code, message, data) {
    this.code = 500;
    this.error_code = error_code;
    this.message = message || ERROR_CODE.DESC[error_code];
    this.data = data;
  }
}

module.exports = {Success, Error};