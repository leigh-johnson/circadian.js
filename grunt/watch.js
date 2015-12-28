module.exports = {
	js: {
		files: [
			'model/**/*.js',
			'routes/**/*.js'
		],
		tasks: ['jshint:all']
	},
	browserify:{
		files:['public/js/partials/**/*.js'],
		tasks:['browserify', 'uglify:min'],
		options: {
			livereload: 1337
		}
	},
	sass: {
		files: ['public/styles/**/*.scss'],
		tasks: ['sass'],
		options: {
			livereload: 1337
		}
	},
	jade: {
		files: ['templates/**/*.jade'],
		options: {
			livereload: 1337
		}
	}
};