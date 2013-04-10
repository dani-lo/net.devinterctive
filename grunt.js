module.exports = function(grunt) {

  var sass = {
    libs  : ["lib", "module"],
    src   : "src/sass",
    dest  : "deploy/public/css",
    files : "src/sass/**/*.sass"
  },  js = {
    src   : "src/scripts",
    dest  : "deploy/public/js",
    files : "src/scripts/**/*.+(coffee|mustache)"
  };


  // Configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      app: {
        src: ['src/scripts/**.coffee'],
        dest: 'deploy/public/js/**.js'
      }
    },
    // Configure the copy task to move files from the development to production folders
    // NOt used
    copy: {
      target: {
        files: {
          'deploy/public/js/': ['src/js/**']
        }
      }
    },
    watch: {
      jscompile : {
        files: 'src/scripts/*',
        tasks: ['coffee']
      }
    }
  });


  // Load plugins here
  grunt.loadNpmTasks('grunt-contrib');

   // Define your tasks here
  grunt.registerTask('default', ['watch']);

  // Define your tasks here

};
