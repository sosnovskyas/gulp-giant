var gulp = require('gulp');
var config = require('../config').devClean;

var del = require('del');

gulp.task('dev-clean', function (callback) {
    return del([config.dest], callback);
});