var gulp = require('gulp');
var config = require('../config').devCompass;

gulp.task('dev-watch-compass', function () {
    gulp.watch(config.watch, ['dev-compass']);
});