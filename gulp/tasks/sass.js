var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var env          = require('../config').env;
var config       = require('../config').sass;

gulp.task('sass', function () {
    gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(sass(config.settings))
        .on('error', handleErrors)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest));
});
