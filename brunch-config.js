// See http://brunch.io for documentation.

module.exports.files = {
  javascripts: {
    joinTo: 'js/app.js'
  },
  stylesheets: {
    joinTo: {
      'css/app.css': 'app/style/main.scss'
    }
  }
};

module.exports.modules = {
  autoRequire: {
    'js/app.js': ['scripts/main.js']
  }
};

module.exports.plugins = {
  babel: {presets: ['latest','env','es2015']},
  sass: { mode: 'native' }
};
