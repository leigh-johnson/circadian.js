module.exports = {
  dev:{
    src:['public/js/app.js'],
    dest: 'public/js/bundle.js',
    options: {
      alias: {
          'bootstrap': './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
        }
      }
  }
};