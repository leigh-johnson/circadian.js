module.exports = {
	dev: {
    options: {
      style: 'expanded',
      sourcemap: true,
      loadPath: ['node_modules/bootstrap-sass/assets/stylesheets', 'node_modules/bootswatch']
    },
    files: {
      'public/styles/site.css': 'public/styles/site.scss',
    }
  },
  min:{
    options:{
        style: 'compressed',
        sourcemap: false,
        loadPath: ['node_modules/bootstrap-sass/assets/stylesheets', 'node_modules/bootswatch']
    },
    files: {
      'public/styles/site.min.css': 'public/styles/site.scss',
    }
  }
};