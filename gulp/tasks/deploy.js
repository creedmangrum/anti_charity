/**
 * Created by afiedler on 1/22/15.
 */
var gulp = require('gulp'),
    awspublish = require('gulp-awspublish'),
    rename = require('gulp-rename');

gulp.task('deploy', function () {
    function getPathName() {
        var packageConf = require('../../package.json');
        var appName = packageConf.name,
            version = packageConf.version;
        return 'lib/' + appName + '/' + version;
    }

    var publisher = awspublish.create({ bucket: 'com.kyruus.cdn'});

    var today = new Date();
    var yearFromNow = new Date(today.setFullYear(today.getFullYear() + 1));
    var headers = {
        'Cache-Control': 'max-age=315360000, public',
        'Expires': yearFromNow
    };

    return gulp.src('./js/*.js')
        .pipe(rename(function (path) {
            path.dirname = getPathName();
        }))
        // gzip, Set Content-Encoding headers
        .pipe(awspublish.gzip())
        // publisher will add Content-Length, Content-Type and headers specified above
        // If not specified it will set x-amz-acl to public-read by default
        .pipe(publisher.publish(headers))
        // print upload updates to console
        .pipe(awspublish.reporter());
});
