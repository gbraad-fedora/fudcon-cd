'use strict';

// Get port from environment settings for deployment on Heroku/Dokku
var EXPRESS_PORT = process.env.PORT || 4000;
var EXPRESS_ROOT = __dirname;
 
function startExpress(root, port) {
  var express = require('express');
  var app = express.createServer();		// express();
  app.use(express.static(root));
  app.listen(port, function() {
    console.log('Listening on port:', port);
  });
}

startExpress(EXPRESS_ROOT, EXPRESS_PORT);
