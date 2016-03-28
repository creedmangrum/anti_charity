var gulp  = require('gulp');
var karma = require('karma').server;
var env   = require('../config').env;

gulp.task('test', function (done) {
    karma.start({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: env != "local",
    //dynamically update the karma.conf file
    //on windows environments add ie
    debug: true,
    browsers: ['Chrome']
  }, function() {
    done();
  });
});