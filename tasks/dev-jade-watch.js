var gulp = require('gulp');
var config = require('../config').devJade;

gulp.task('dev-jade-watch', function() {
  gulp.watch(config.watch, config.runTasks);
});