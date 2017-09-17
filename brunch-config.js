// See http://brunch.io for documentation.

module.exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {
    joinTo: {
      'css/app.css': 'app/main.scss',
      'css/app2.css': 'app/main2.css'
    }
  }
};

module.exports.plugins = {
  babel: {presets: ['latest']},
  sass: { mode: 'native' }
};
