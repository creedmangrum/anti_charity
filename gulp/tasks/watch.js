var gulp = require('gulp')
config = require('../config');

gulp.task('watch', function() {
    var stylePaths = config.sass.settings.includePaths.map(function(path) {
        //globify
        return path + '/*'
    });

    gulp.watch(stylePaths, ['sass']);
});