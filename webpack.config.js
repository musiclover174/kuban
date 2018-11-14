const path = require('path');

module.exports = {
  mode: 'production',
  entry: './dev/js/building/script.js',
  output: {
    path: path.resolve(__dirname, './dev/js/'),
    filename: 'script.js'
  }
};