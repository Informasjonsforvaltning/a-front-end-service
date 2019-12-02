import merge from 'webpack-merge';
import ErrorOverlayPlugin from 'error-overlay-webpack-plugin';
import baseConfig from './base.config';

export default merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8203
  },
  plugins: [new ErrorOverlayPlugin()]
});
