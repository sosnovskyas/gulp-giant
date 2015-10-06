var gulp = require('gulp');
var config = require('../config').devScss;

gulp.task('dev-watch-scss', function () {
    gulp.watch(config.watch, ['dev-scss']);
});