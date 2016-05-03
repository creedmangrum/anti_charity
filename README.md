# anti_charity

## Development

cookie
### Static assets

There are two global dependencies used to build the static assets: node.js and gulp.
Node.js is the engine for the javascript build tools gulp and browserify.

    $ brew install node.js

gulp is the javascript task runner in node that runs that various build tasks

    $ npm install --global gulp

Install build and runtime dependencies using npm. These can be both build and runtime dependencies

    $ npm install

The task runner for this project is gulp which can run the build and deploy tasks.
The bundling library used is browserify which takes all the small .coffee files and compiles them into a single script
named anti_charity.js. In a development environment source maps are also provided in the  anti_charity.js.map file.
file that can be imported onto the page.
To build the bundle run gulp.

    $ gulp

In a local environment gulp will run both the browserify bundling task as well as the testing with a file watcher.
That means that when any file is changed, the bundle will automatically be rebuilt and the tests will automatically be re run.
Gulp will continue to watch the files as long as the process is running in that tab.
The tasks can be found in the gulpfile.js.
Press ctrl + c to stop listening for file changes.

You can also run individual gulp tasks:

    $ gulp test

In a non-local environment, the bundle is automatically minified and a gzip file is produced.
Also the build will only run once.
To change the environment export the GULP_DEPLOY_ENV environment variable. There are currently three different
environment variables that can be found in the the /static/config/env directory. There are currently three
environments: production, development, and local. Requiring the /config/conf
module allows you to use deployment specific variables such as endpoints and tokens.
For example, to set the environment to 'production', export the node env environment variable and re run gulp.
Unlike file changes, you will need to stop and restart the gulp process with ctrl + c for the changes to take .

    $ export GULP_DEPLOY_ENV=production

To run locally, use the local environment. The Local environment config can be found in static/config/env/local.js.

    $ export GULP_DEPLOY_ENV=local



## Bump and Deploy

There are automated tasks to bump the version in the package.json and to deploy that version to the CDN.
You can bump the version number by calling the gulp tasks for major, minor or patch versions as per [semantic versioning](http://semver.org).
For example:

    $ gulp patch

or

    $ gulp major

The deploy gulp task will automatically deploy the appropriate version to the CDN. It uses an gulp plugin called gulp-awspublish.
Deployment should always be done as part of the build step in production which will have the appropriate IAM roles on
the build machine. To use this plugin locally you will need to copy your AWS credentials on any of our Jenkins servers
to your local machine. You should have a file at ~/.aws/credentials that contains your access key and secret access key
as can be found in the [node.js aws sdk](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html).
Once that credentials file is present, you can deploy using the gulp task.

    $ gulp deploy
