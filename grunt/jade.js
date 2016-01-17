module.exports = {
  compile: {
    options: {
      pretty: true
    },
      files: [{
                  expand: true,
                  flatten: true,
                  src:  ['views/client/**/*.jade'],
                  dest: 'public/js/templates/',
                  ext: '.html'
            }]
  }
}