//var gulp = require("gulp");
//var sourcemaps = require("gulp-sourcemaps");
//var babel = require("gulp-babel");
//var concat = require("gulp-concat");
//var env          = require('../config').env;
//var config       = require('../config').babel;
//var browserify = require('browserify');
//var babelify     = require('babelify');
//var uglify       = require('gulp-uglify');
//var source       = require('vinyl-source-stream');
//
//
//
////gulp.task('babel', function () {
////  return gulp.src(config.src)
////    .pipe(sourcemaps.init())
////    .pipe(babel(config.presets))
////    .pipe(concat("all.js"))
////    .pipe(sourcemaps.write())
////    .pipe(gulp.dest(config.dest));
////});
//
//gulp.task('babel', function () {
//  browserify({
//    entries: 'src/components/App/App.js',
//    extensions: ['.js'],
//    debug: true
//  })
//  .transform(babelify)
//  .bundle()
//  .pipe(source('bundle.js'))
//  .pipe(gulp.dest(config.dest))
//});
