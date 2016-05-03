/**
 * Created by afiedler on 1/22/15.
 */
var gulp = require('gulp'),
    bump = require('gulp-bump'),
    git = require('gulp-git'),
    tagVersion = require('gulp-tag-version');

function bumpVersion(versionType) {
    return gulp.src('./package.json')
        .pipe(bump({type: versionType}))
        // save it back to filesystem
        .pipe(gulp.dest('./'))
        // commit the changed version number
        .pipe(git.commit('bumps package version'))
        .pipe(tagVersion());
}

gulp.task('major', function() { bumpVersion('major') });
gulp.task('minor', function() { bumpVersion('minor') });
gulp.task('patch', function() { bumpVersion('patch') });