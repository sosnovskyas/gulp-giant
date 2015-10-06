var gulp = require('gulp');
var config = require('../config').devJsCustom;

var concat = require('gulp-concat');
var browserSync  = require('browser-sync');

// developer JS
gulp.task('dev-js-custom', function () {
    // custom scripts
    gulp.src([config.src])
        .pipe(concat('app.js'))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream: true}));
});