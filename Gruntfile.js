module.exports = function(grunt) {

  'use strict';
  
  grunt.initConfig({

    hackmyresume: {
      options: {
        theme: 'node_modules/jsonresume-theme-classy',
        pdf: 'phantom'
      },
      main: {
        src: 'resume.json',
        dest: 'current/resume.all'
      }
    }

  });

  grunt.loadNpmTasks('grunt-hackmyresume');
  grunt.registerTask('default', ['hackmyresume']);
}
