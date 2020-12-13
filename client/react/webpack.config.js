const path = require('path');
module.exports = {
  entry: './src/',
  output: {
      path: path.resolve(__dirname, "./../dist"),
      filename: 'react_app.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
