var gulp = require('gulp');
var config = require('../config').devImage;

gulp.task('dev-image-watch', function() {
  gulp.watch(config.watch, config.runTasks);
});