// Grunt-sass-compass-php for hirokoymj.com
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //Compass and Scss
    compass: {
      options: {
        sassDir: 'sass',
        cssDir: 'public/css',
        imagesDir: "public/images",
        fontsDir: "fonts"
      },
      dev: {
        options: {
          environment: 'development',
          outputStyle: 'expanded',
          force:true, // Allows Compass to overwrite existing files.
          relativeAssets: true
        }
      },
      dist: {
        options: {
          environment: 'production',
          outputStyle: 'compressed',
          force: true
        }
      }
    },
    //Watch for changes compass
    watch:{
      compass: {
        files: ['sass/*.scss'],
        tasks: ['compass:dev']
      },
    }
  });

//  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');

 // PRODUCTION
  grunt.registerTask('build',[
    'compass:dist'
  ]);

// DEVELOPMENT
  grunt.registerTask('default', [
    'compass:dev',
     'watch'
  ]);

};