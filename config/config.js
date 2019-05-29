const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'expressproject'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://ezqmuomn:woI-J5Ok6UQlVZ1S-YiTtkKxOA_3MXwg@balarama.db.elephantsql.com:5432/ezqmuomn'
  },

  test: {
    root: rootPath,
    app: {
      name: 'expressproject'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/expressproject-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'expressproject'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/expressproject-production'
  }
};

module.exports = config[env];
