'use strict';

// get port from environment settings for deployment on Heroku
var EXPRESS_PORT = process.env.PORT || 4000;
var EXPRESS_ROOT = __dirname;
var LIVERELOAD_PORT = 35729;
 
var gulp = require('gulp');
var gutil = require('gulp-util');
var log = gutil.log;

var watchFiles = ['*.html', '*.md'];

function startExpress(root, port) {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')());
  app.use(express.static(root));
  app.listen(port, function() {
    log('Listening on port:', port);
  });
}

var lr;
function startLivereload(port) {
  lr = require('tiny-lr')();
  lr.listen(port);
}
 
function notifyLivereload(event) {
  gulp.src(event.path, {read: false})
      .pipe(require('gulp-livereload')(lr));
}

gulp.task('server', function () {
  startExpress(EXPRESS_ROOT, EXPRESS_PORT);
  startLivereload(LIVERELOAD_PORT);
  gulp.watch(watchFiles, notifyLivereload);
});

gulp.task('default', []);
