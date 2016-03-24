module.exports = function(grunt) {

  var hmr = require('hackmyresume');

  grunt.initConfig({
    build: {
      options: {

      },
      html: {
        options: {
          theme: 'node_modules/jsonresume-theme-classy',
          css: 'embed'
        },
        dest: ['current/BrentonBillsResume.html']
      },
      singlepagehtml: {
        options: {
          theme: 'node_modules/jsonresume-theme-onepage',
          css: 'embed'
        },
        dest: ['current/BrentonBillsSingleResume.html']
      },
      markdown: {
        dest: ['current/BrentonBillsResume.md']
      }
    }
  });

  grunt.registerMultiTask('build', 'Building resume', function() {

    var build = new hmr.verbs.build();

    grunt.log.write('Building ' + this.data.dest + ' ');

    build.on('hmr:error', function(ex) {
      grunt.warn('Failed');
    });

    build.on('hmr:status', function(ex) {
      grunt.log.write(".");
    });

    this.options.errHandler = build;
    build.invoke.call(build, ['resume.json'], this.data.dest, this.options(), function() { } );

    grunt.log.write(' ').ok();
  });

  grunt.registerTask('default', ['build']);


}
