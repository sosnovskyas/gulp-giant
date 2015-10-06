var gulp = require('gulp');
var config = require('../config').devJade;
var jade = require('gulp-jade');
var browserSync = require('browser-sync');


gulp.task('dev-jade', function () {

    var YOUR_LOCALS = {};

    return gulp.src(config.src)
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: true
        }))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream: true}))
        ;
});