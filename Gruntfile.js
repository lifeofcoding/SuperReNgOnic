/*

Default Gruntfile for AppGyver Steroids
http://www.appgyver.com
Licensed under the MIT license.

*/

module.exports = function(grunt) {
    grunt.initConfig({
    babel: {
        options: {
            sourceMap: false,
            presets: ['es2015'],
            plugins: ['transform-react-jsx']
        },
        dist: {
            files: {
                'dist/app/components.js': '**/**.jsx'
            }
        }
    }
});

  grunt.loadNpmTasks("grunt-steroids");
  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask("default", [
    "steroids-make-fresh",
    "babel"
  ]);
}
