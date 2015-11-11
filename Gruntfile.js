module.exports = function(grunt) {
    var staticUnminified = 'compile/unminified/';
    var devPath = 'assets/';

    grunt.util.linefeed = '\r\n';
    grunt.initConfig({
        staticUnminified: staticUnminified,
        devPath: devPath,
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: '' +
                ' '
            },
            js: {
                src: [
                    'bower_components/angular/angular.min.js',
                    'bower_components/EaselJS/lib/easeljs-NEXT.combined.js',
                    'bower_components/angular-sanitize/angular-sanitize.min.js',
                    'bower_components/angular-mm-foundation/mm-foundation-tpls.min.js',
                    '<%= devPath %>js/*.js',
                    '<%= devPath %>js/*/*.js'],
                dest: '<%= staticUnminified %>app.js'
            }
        },

        sass: {
            options: {
                includePaths: ['bower_components/foundation/scss']
                /*includePaths: ['bower_components/foundation/scss','bower_components/bourbon/app/assets/stylesheets']*/
            },
            dist: {
                options: {
                    //outputStyle: 'compressed',
                    sourceMap: true
                },
                files: {
                    '<%= staticUnminified %>style.css': [
                        '<%= devPath %>scss/main.scss'
                    ]
                }
            }
        },

        watch: {
            options: {
                spawn: false,
                debounceDelay: 150,
                atBegin: true
            },
            sass: {
                files: [
                    '<%= devPath %>scss/*.scss', '<%= devPath %>scss/*/*.scss',

                ],
                tasks: 'buildSass'
            },
            js: {
                files: [
                    '<%= devPath %>js/*/*.js', '<%= devPath %>js/*.js',
                ],
                tasks: 'buildJS'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask( 'buildJS', [
        'concat:js'
        //'uglify'
    ] );

    grunt.registerTask('buildSass', [
        'sass'
    ]);

    grunt.registerTask('watchJS', [
        'watch:js'
    ]);

    grunt.registerTask('watchSass', [
        'watch:sass'
    ]);

};