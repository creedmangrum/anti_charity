/* bundleLogger
   ------------
   Provides gulp style logs to the bundle method in browserify.js
*/

var gutil        = require('gulp-util');
var prettyHrtime = require('pretty-hrtime');
var startTime;

module.exports = {
  start: function(filepath) {
    startTime = process.hrtime();
    gutil.log('Bundling', gutil.colors.green(filepath) + '...');
  },

  end: function(filepath) {
    var taskTime = process.hrtime(startTime);
    var prettyTime = prettyHrtime(taskTime);
    gutil.log('Bundled', gutil.colors.green(filepath), 'in', gutil.colors.magenta(prettyTime));
  },

  exclude: function(filepath, libs) {
    gutil.log('Excluding', gutil.colors.yellow(libs), 'from', gutil.colors.green(filepath));
  },

  transform: function(filepath, transform) {
    gutil.log('Performing transform:', gutil.colors.cyan(transform), 'on', gutil.colors.green(filepath));
  },

  prod: function(filepath, newFilepath) {
    gutil.log('Building for production/staging. Minifying', gutil.colors.green(filepath), 'to',
              gutil.colors.green(newFilepath));
  }
};
