/*eslint-env node */
'use strict';
// vendor
var express = require('express');
var bodyParser = require('body-parser');
// helpers
var validateConfig = require('./helpers/validateConfig');
var makeRoutes = require('./helpers/makeRoutes');
var port = process.env.VCAP_APP_PORT || 8080;
module.exports = {
  start: function(config) {
    validateConfig(config)

    var app = createServer();
    makeRoutes(app, config);
    startServer(app, config);
  }
};

function createServer() {
  var app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  return app;
}
app.listen(port);
function startServer(app, config) {
  var server = app.listen(config.port, function () {
    console.log("");
    console.log("==============================================");
    console.log('Mock server running at: http://localhost:%s', config.port);
    console.log("==============================================");
  });
}
