// eslint-disable-next-line @typescript-eslint/no-var-requires
const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ]
});