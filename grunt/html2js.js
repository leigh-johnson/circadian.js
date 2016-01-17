module.exports = {
  compile: {
    options: {
      singleModule: true
    },
      files: [{
                  expand: true,
                  flatten: true,
                  src:  ['views/client/**/*.jade'],
                  dest: 'public/js/templates/',
                  ext: '.js'
            }]
  }
}