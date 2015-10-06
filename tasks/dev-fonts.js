
var gulp = require('gulp');

gulp.task('dev-fonts', function() {
    return gulp.src([
        'src/fonts/**/*'])
        .pipe(gulp.dest('build/dev/fonts/'));
});