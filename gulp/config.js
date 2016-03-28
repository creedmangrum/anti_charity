var src = './anti_charity/static';
var dest = './anti_charity/static';

module.exports = {
  env: process.env.GULP_DEPLOY_ENV || 'development',
//  serve: {
//      port: 9000,
//      server: {
//          baseDir: 'carna/static'
//      }
//  },
  sass: {
    src: "src/**/*.scss",
    dest: dest + '/css/',
    settings: {
        includePaths: [
            'src/**/*.scss'
        ]
    }
  },
  babel: {
    src: "src/**/*.js",
    dest: dest + '/js/'
  },
  browserify: {
     // Additional file extentions to make optional
    extensions: ['.coffee','.html'],
    detectGlobals: false,
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: [src + '/coffee/anti_charity.coffee' ],
      dest: dest + '/js',
      outputName: 'app.js'
    }]
  }
};
