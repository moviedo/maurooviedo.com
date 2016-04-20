module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'javascripts/app.js': /^app\//,
        'javascripts/vendor.js': /^(?!app\/)/
      }
    },
    stylesheets: {
      joinTo: {
        'stylesheets/app.css': /^app/,
        'stylesheets/vendor.css': /^(?!app\/)/
      }
    },
    templates: {
      joinTo: {
        'javascripts/templates.js': /^app\//,
      }
    }
  },
  
  npm: {
    styles: {
      bootswatch: ['readable/bootstrap.css']
    }
  },
  
  server: {
    port: 8000,
    hostname: '0.0.0.0',
    stripSlashes: true
  },
  
  watcher: {
    usePolling: true
  },
  
  plugins: {
    autoReload: {
      port: 8080
    }
  }
}
    
