var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config').devBrowsersync;

gulp.task('dev-browsersync', function() {
  browserSync({server: config.dest});
});