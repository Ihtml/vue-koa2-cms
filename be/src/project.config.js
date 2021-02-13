const path = require('path');

module.exports = {
  DEFAULT_PASSWORD: '123456',
  JWT_SECRET: 'good-mgr',
  UPLOAD_DIR: path.resolve(__dirname, '../upload'),

  SERVER_PORT: 3000,
};
