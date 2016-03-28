var browserSync = require('browser-sync');
var gulp        = require('gulp');
var serveConfig      = require('../config').serve;

gulp.task('serve', function() {
    browserSync(serveConfig);
});