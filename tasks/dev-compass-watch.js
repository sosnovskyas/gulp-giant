var gulp = require('gulp');
var config = require('../config').devCompass;

gulp.task('dev-compass-watch', function() {
  gulp.watch(config.watch, config.runTasks);
});