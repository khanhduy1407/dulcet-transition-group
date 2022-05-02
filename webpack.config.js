const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: process.env.NODE_ENV === 'production' 
      ? 'dulcet-transition-group.min.js'
      : 'dulcet-transition-group.js',
    path: path.join(__dirname, 'lib/dist'),
    library: 'DulcetTransitionGroup',
    libraryTarget: 'umd',
  },
  externals: {
    dulcet: {
      root: 'Dulcet',
      commonjs2: 'dulcet',
      commonjs: 'dulcet',
      amd: 'dulcet',
    },
    'dulcet-dom': {
      root: 'DulcetDOM',
      commonjs2: 'dulcet-dom',
      commonjs: 'dulcet-dom',
      amd: 'dulcet-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: '@nkduy/babel-loader',
      },
    ],
  },
};
