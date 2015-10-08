var gulp = require('gulp');
var config = require('../config').devJsDirect;

gulp.task('dev-js-direct', function() {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
  ;
});
