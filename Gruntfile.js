module.exports = function(grunt) {
    grunt.initConfig({
        log: {
            foo: [1, 2, 3],
            bar: "hello world",
            baz: false
        },

        sass: {                               // Task
            dev: {                              // Target
                files: {                        // Dictionary of files
                    'deploy/public/css/main.css': 'src/scss/main.scss'
                }
            }
        },
        coffee : {
            dev : {
                options: {
                  join: true
                },
                files: {
                  'deploy/public/js/app.js': 'src/scripts/**/*.coffee'
                }
            }
        },
        minified : {
          files: {
            src: [
            'deploy/public/js/app.js'
            ],
            dest: 'deploy/js/'
          },
          options : {
            sourcemap: true
          }
        },
        deploy : {

        },
        copy: {
          main: {
            files: [
              {expand: true, cwd: 'src/scripts/', src: ['lib/**', 'tpl/**'], dest: 'deploy/public/js/'}
            ]
          }
        },
        watch: {
            sass: {
                files: ['**/*.scss'],
                tasks: ['sass'],
                options: {interrupt: true}
            },
            coffee : {
                files: ['**/*.coffee'],
                tasks: ['coffee']
            }
        }
    });

    /* // test
    grunt.registerMultiTask("log", "Log stuff.", function() {
      grunt.log.writeln(this.target + ': ' + this.data);
    });
    */

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-minified');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dist', ['copy']);
}