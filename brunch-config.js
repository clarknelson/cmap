// See http://brunch.io for documentation.

module.exports.files = {
  javascripts: {
    joinTo: {
      'js/vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'js/app.js': /^app/
    }
  },
  stylesheets: {
    joinTo: {
      'css/app.css': 'app/style/main.scss'
    }
  }
};

module.exports.plugins = {
  babel: {presets: ['latest']},
  sass: { mode: 'native' }
};

module.exports.paths = {
  public: 'docs'
};
