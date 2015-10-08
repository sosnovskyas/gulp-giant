var gulp = require('gulp');
var compass = require('gulp-compass');
var path = require('path');
var config = require('../config').devCompass;
var concat = require('gulp-concat');
var browserSync  = require('browser-sync');

gulp.task('dev-compass', function() {
  gulp.src(config.src)
    .pipe(compass({
      css: config.dest,
      sass: 'src',
      image: 'src/img',
      generated_images_path: 'build/dev/i',
      sourcemap: true
    }))
    .on('error', function(error) {
      // Would like to catch the error here
      console.log(error);
      this.emit('end');
    })
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}))
  ;
});
