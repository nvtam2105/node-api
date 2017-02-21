// config/initializers/database.js
var mysql = require('mysql');
var nconf = require('nconf');
var logger = require('winston');

module.exports = function(cb) {
  'use strict';
  logger.info('[APP] Database: ' + JSON.stringify(nconf.get('database')));
  var dbCon = nconf.get('database');
  var pool =  mysql.createPool({
      host: dbCon.host,
      connectionLimit: dbCon.connectionLimit,
      user: dbCon.user,
      password: dbCon.password,
      database: dbCon.database
    }
  );
  cb(null, pool);
};
