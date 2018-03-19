module.exports = {
  files: {
    javascripts: {
      joinTo: 'javascripts/app.js'
    },
    stylesheets: {
      joinTo: {
        'stylesheets/app.css': /^app/,
        'stylesheets/vendor.css': /^(?!app\/)/
      }
    },
    templates: {
      joinTo: 'javascripts/app.js'
    }
  },

  npm: {
    styles: {
      'normalize.css': ['normalize.css']
    }
  },

  overrides: {
    production: {
      plugins: {
        autoReload: {
          enabled: false
        }
      }
    }
  },

  plugins: {
    autoprefixer: {
      browser: [
        '> 5%',
        'last 2 versions',
        'safari >= 9',
        'ie >= 10',
        'ios >= 9',
      ]
    },
    sveltejs: {
      extractCSS: true,
      out: './public/stylesheets/vendor.css',
    }
  }
}
