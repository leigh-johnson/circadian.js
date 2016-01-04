module.exports = {
  compile: {
    options: {
      client: true,
      pretty: true
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