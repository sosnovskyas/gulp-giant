var gulp = require('gulp');
var config = require('../config').devJsCustom;

gulp.task('dev-watch-js-custom', function () {
    gulp.watch(config.watch, ['dev-js-custom']);
});