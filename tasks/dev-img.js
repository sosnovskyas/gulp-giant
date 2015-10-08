var gulp = require('gulp');
var config = require('../config').devImage;
var changed    = require('gulp-changed');
var imagemin   = require('gulp-imagemin');
var browserSync  = require('browser-sync');

gulp.task('dev-img', function() {
  gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(imagemin())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}))
  ;
});