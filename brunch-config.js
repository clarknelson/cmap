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

module.exports.plugins = {
  babel: {presets: ['env','latest','es2015']},
  sass: { mode: 'native' }
};

module.exports.paths = {
  public: 'docs'
};
