var gulp = require('gulp');
var config = require('../config').devSass;

gulp.task('dev-sass-watch', function() {
  gulp.watch(config.watch, config.runTasks);
});