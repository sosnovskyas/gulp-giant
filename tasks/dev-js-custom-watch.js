var gulp = require('gulp');
var config = require('../config').devJsCustom;

gulp.task('dev-js-custom-watch', function() {
  gulp.watch(config.watch, config.runTasks);
});