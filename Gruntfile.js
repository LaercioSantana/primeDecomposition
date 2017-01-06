module.exports = function( grunt ) {

  grunt.initConfig({

    uglify : {
      options : {
        mangle : false
      },
      build_minify : {
        files : {
          'dist/primeDecomposition.min.js' : [ 'src/js/primeDecomposition.js']
        }
      },
      build : {
        options: {
          beautify: true
        },
        files : {
          'dist/primeDecomposition.js' : [ 'src/js/primeDecomposition.js']
     	}
      }
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1,
      },
      target: {
        files: {
          'dist/primeDecomposition.min.css': ['src/css/primeDecomposition.css']
        }
      }
    },
    
    concat: {
        dist: {
          files: {
            'dist/primeDecomposition.css' : ['src/css/primeDecomposition.css']
          }
        }
    },

    watch: {
      css: {
        files: ['src/css/*.css'],
        tasks: ['concat', 'cssmin']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['uglify:build']
      }
    }

  });

  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask( 'default', [ 'uglify', "cssmin", "concat"] );

};
