var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config').developer;

gulp.task('dev', function(callback) {
  runSequence(
    config.sequencePre,
    config.sequenceClean,
    config.sequenceBuild,
    config.sequenceServer,
    config.sequenceWatch,
    config.sequencePost,
    callback);
});