import merge from 'webpack-merge';
import baseConfig from './base.config';

export default merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8203
  }
});
