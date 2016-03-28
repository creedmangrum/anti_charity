var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var env          = require('../config').env;
var config       = require('../config').babel;

gulp.task('babel', function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(babel(config.presets))
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest));
});
