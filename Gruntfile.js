'use strict()';

var config= {};

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  //require('time-grunt')(grunt);

  var options = {
    config: {
      src: './grunt/*.js'
    },
    pkg: grunt.file.readJSON('package.json')
  };

  var configs = require('load-grunt-configs')(grunt, options);
  
  // Project configuration.
  grunt.initConfig(configs);

  // load jshint
  grunt.registerTask('lint', [
    'jshint'
  ]);

  grunt.registerTask('dev', [
    'sass:dev',
    'browserify:dev',
    'jade:compile',
    //'uglify:min',
    //'sass:min',
    'watch'
  ]);

  // default option to connect server
  grunt.registerTask('serve', [
    'jshint',
    'concurrent:dev'
  ]);

  grunt.registerTask('min', [
    //'uglify:min',
    'sass:min'
    ]); 

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

};
