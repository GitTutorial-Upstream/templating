var gulp = require('gulp');
var karma = require('karma').server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/../../karma.conf.js',
        singleRun: true
    }, function(e) {
        done();
    });
});

/**
 * Run the tests on Sauce Labs as part of Travis-CI integration.
*/
gulp.task('test-ci', function (done) {
   karma.start({
       configFile: __dirname + '/../../karma.ci.conf.js'
   }, function(e) {
       done();
   });
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
    karma.start({
        configFile: __dirname + '/../../karma.conf.js'
    }, function(e) {
        done();
    });
});
