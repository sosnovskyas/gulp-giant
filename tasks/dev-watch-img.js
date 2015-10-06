var gulp = require('gulp');
var config = require('../config').devImage;

gulp.task('dev-watch-img', function () {
    gulp.watch(config.watch, ['dev-img']);
});