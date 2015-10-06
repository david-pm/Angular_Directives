module.exports = function(grunt) {

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

grunt.initConfig({
  connect: {
    server: {
      options: {
        port: 9999,
        base: './'
      }
    }
  },
  watch: {
    options: {
            livereload: true
    },
    html: {
            files: ['**/*.html'],
            tasks: [],
            options: {
                    spawn: false
            }
    }
  } // watch
});
  grunt.registerTask('default', ['connect','watch']);
};