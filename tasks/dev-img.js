var gulp = require('gulp');
var config = require('../config').devImage;

// отслеживет изменение чтоб не пересоздавать файлы которые не изменились
var changed    = require('gulp-changed');
// минифицирует изображения
var imagemin   = require('gulp-imagemin');
var browserSync  = require('browser-sync');

gulp.task('dev-img', function () {
    gulp.src(config.src)
        .pipe(changed(config.dest)) // Ignore unchanged files
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest))

        .pipe(browserSync.reload({stream:true}))
});