module.exports = function(grunt) {

  // Configuration goes here
  grunt.initConfig({

    // Configure the copy task to move files from the development to production folders
    copy: {
      target: {
        files: {
          'deploy/public/': ['src/js/**']
        }
      }
    },
  });

  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib');

   // Define your tasks here
  grunt.registerTask('default', ['copy']);

  // Define your tasks here

};