module.exports = {
	dev: {
    options: {
      style: 'expanded',
      sourcemap: true
    },
    files: {
      'public/styles/site.css': 'public/styles/site.scss',
    }
  },
  min:{
    options:{
        style: 'compressed',
        sourcemap: false
    },
    files: {
      'public/styles/site.min.css': 'public/styles/site.scss',
    }
  }
};