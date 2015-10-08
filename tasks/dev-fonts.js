var gulp = require('gulp');
var config = require('../config').devFonts;

gulp.task('dev-fonts', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});