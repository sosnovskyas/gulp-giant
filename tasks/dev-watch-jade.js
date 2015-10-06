var gulp = require('gulp');
var config = require('../config').devJade;

gulp.task('dev-watch-jade', function () {
    gulp.watch(config.watch, ['dev-jade']);
});