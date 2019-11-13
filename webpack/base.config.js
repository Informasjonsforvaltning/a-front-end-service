const path = require('path');

module.exports = {
  entry: ['./src/index.tsx'],
  output: {
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};
