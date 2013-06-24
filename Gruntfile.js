
var fs = require('fs'), filesMap;
var walk = function(dir, done) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = dir + '/' + file;
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};


function getListing() {
  walk("/home/dani/dev/devinteractive.net/www/src/scripts", function(err, results) {
    if (err) throw err;
    filesMap = results;
  });
};

module.exports = function(grunt, filesMap) {
    grunt.initConfig({
        log: {
            foo: [1, 2, 3],
            bar: "hello world",
            baz: false,
            xxx : "xxxx"
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
                  'deploy/public/js/app.js': 'src/scripts/app.coffee',
                  'deploy/public/js/util/loader.js': 'src/scripts/util/loader.coffee',
                  'deploy/public/js/tests/qunit-tests.js' : 'src/scripts/tests/qunit-tests.coffee',
                  'deploy/public/js/tests/require-test-module.js' : 'src/scripts/tests/require-test-module.coffee',
                  'deploy/public/js/views/akqa-main.js' : 'src/scripts/views/akqa-main.coffee',
                  'deploy/public/js/ui/helpers/toggable.js' : 'src/scripts/ui/helpers/toggable.coffee',
                  'deploy/public/js/util/validator.js' : 'src/scripts/util/validator.coffee',
                  'deploy/public/js/models/job.js' : 'src/scripts/models/job.coffee',
                  'deploy/public/js/views/cv.js' : 'src/scripts/views/cv.coffee',
                  'deploy/public/js/collections/cv.js' : 'src/scripts/collections/cv.coffee'
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


    grunt.registerMultiTask("log", "Log stuff.", function() {
      grunt.log.writeln(this.target + ': ' + this.data);
    });


    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-minified');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dryrun', ['sass', 'coffee']);
    grunt.registerTask('dist', ['copy']);
    grunt.registerTask('tester', ['log']);
};