var gulp = require('gulp');
var config = require('../config').devSass;
var sourcemaps = require('gulp-sourcemaps');
var scss = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var browserSync  = require('browser-sync');

gulp.task('dev-sass', function() {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(scss())
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .pipe(concat(config.concatFile))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}))
  ;
});
