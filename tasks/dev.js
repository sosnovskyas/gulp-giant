var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', function(callback) {
    runSequence(
        'dev-clean',
        [
            'dev-jade',
            'dev-js-direct',
            'dev-compass',
            'dev-fonts',
            'dev-img'
        ],
        'dev-browsersync',
        [
            'dev-watch-jade',
            'dev-watch-compass',
            'dev-watch-js-custom',
            'dev-watch-img'
        ],
        callback);
});
/*
*  НАДО ПЕРЕНЕСТИ НАСТРОЙКУ ПОСЛЕДОВАТЕЛЬНОСТИ В КОНФИГ
*  в такой конфигурайии почему-то не работает
*/

//
//var gulp = require('gulp');
//var config = require('../config').devMain;
//var runSequence = require('run-sequence');
//
//gulp.task('dev', function (callback) {
//    runSequence(
//        config.sequence,
//        callback);
//});