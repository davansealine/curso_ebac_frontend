module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    './build/main.css': './styles/main.less'
                }
            }
        },
        uglify: {
            target:{
                files: {
                    'build/main.min.js': 'src/scripts/main.js'
            }
        }
    }
})


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['less', 'uglify']);
}