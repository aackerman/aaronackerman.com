module.exports = {
  entry: './app/scripts/main.js',
  output: {
    filename: './build/bundle.js'
  },
  module: {
    loaders: [{ test: /\.js$/, loader: '6to5-loader!jsx-loader?harmony' }]
  }
};
