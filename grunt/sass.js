module.exports = {
	dev: {
    options: {
      style: 'expanded',
      loadPath: ['node_modules/bootstrap-sass/assets/stylesheets', 'node_modules/bootswatch', 'node_modules/font-awesome/scss']
    },
    files: {
      'public/styles/site.css': 'src/styles/site.scss',
    }
  },
  min:{
    options:{
        style: 'compressed',
        loadPath: ['node_modules/bootstrap-sass/assets/stylesheets', 'node_modules/bootswatch', 'node_modules/font-awesome/scss']
    },
    files: {
      'public/styles/site.min.css': 'public/styles/site.scss',
    }
  }
};