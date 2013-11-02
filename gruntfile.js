module.exports = function(grunt) { 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				separator: ';'
			},

			dist: {
				src: ['js/*.js'],
				dest: 'dist/<%= pkg.name %>.js'
			},

			// spec: {
			// 	src: 'spec/*Spec.js',
			// 	dest: 'dist/spec/<%= pkg.name %>Spec.js'
			// },

			bower: {
				src: ['bower components'],
				dest: 'dist/bower_components/bower_components.js'
			}
			
		},

		watch: {
			source: {
				files: ['src/*.js', 'spec/*.js'],
				tasks: ['tasks to perform on watch'],
			},
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat']);

}