//https://github.com/Nikku/karma-browserify
module.exports = function(karma) {
  karma.set({

    // include browserify first in used frameworks
    frameworks: [ 'browserify', 'mocha' , 'chai'],

    // add all your files here,
    // including non-commonJS files you need to load before your test cases
    files: [
      //we need to include lib for anything that we shim
      //This is an ordered dependency list
        'node_modules/underscore/underscore.js',
        'node_modules/backbone/backbone.js',
        'node_modules/jquery/dist/jquery.js',
        'anti_charity/static/coffee/tests/**/*.coffee'
    ],

    // add preprocessor to the files that should be
    // processed via browserify
    preprocessors: {
      'anti_charity/static/coffee/tests/**/*.coffee': [ 'browserify' ]
    },

    //we may be able to modify the browser on the fly with gulp like adding ie8
    browsers: ['PhantomJS'],

    // see what is going on
    logLevel: 'LOG_DEBUG',

    // use autoWatch=true for quick and easy test re-execution once files change
    autoWatch: true,

    singleRun: true,

    reporters: ['dots'],

    // add additional browserify configuration properties here
    // such as transform and/or debug=true to generate source maps
    browserify: {
      debug: true,
      extensions: ['.coffee', '.html']
    }
  });
};