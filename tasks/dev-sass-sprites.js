var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var config = require('../config').devSassSprites;


gulp.task('dev-sass-sprite', function () {
    var spriteData = gulp.src(config.src)
        .pipe(spritesmith({
            imgName: config.exportImg,
            cssName: config.exportCss
        }));
    return spriteData.pipe(gulp.dest(config.dest));
});