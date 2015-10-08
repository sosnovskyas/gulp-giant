var gulp = require('gulp');
var config = require('../config').devJsCustom;
var concat = require('gulp-concat');
var browserSync  = require('browser-sync');

gulp.task('dev-js-custom', function() {
  gulp.src([config.src])
    .pipe(concat(config.concatFile))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});