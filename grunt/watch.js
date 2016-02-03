module.exports = {
	js: {
		files: [
			'model/**/*.js',
			'routes/**/*.js'
		],
		tasks: ['jshint:all']
	},
	browserify:{
		files:['public/js/app.js', 'public/js/controllers/*.js', 'public/js/services/*.js'],
		tasks:['browserify'],
		options: {
			livereload: 1337
		}
	},
	sass: {
		files: ['src/styles/**/*.scss'],
		tasks: ['sass:dev'],
		options: {
			livereload: 1337
		}
	},
	jade: {
		files: ['views/**/*.jade'],
		options: {
			livereload: 1337
		}
	}
};