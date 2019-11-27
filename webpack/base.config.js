/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BaseHrefWebpackPlugin } from 'base-href-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
  entry: { main: './src/index.tsx' },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, '../.babelrc')
            }
          },
          'ts-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new (class ChunksFromEntryPlugin {
      apply(compiler) {
        compiler.hooks.emit.tap('ChunksFromEntryPlugin', compilation => {
          compilation.hooks.htmlWebpackPluginAlterChunks.tap(
            'ChunksFromEntryPlugin',
            (_, { plugin }) =>
              compilation.entrypoints
                .get(plugin.options.entry)
                .chunks.map(chunk => ({
                  names: chunk.name ? [chunk.name] : [],
                  files: chunk.files.slice(),
                  size: chunk.modulesSize(),
                  hash: chunk.hash
                }))
          );
        });
      }
    })(),
    new HtmlWebpackPlugin({
      entry: 'main',
      template: './src/index.html',
      filename: 'index.html'
    }),
    new BaseHrefWebpackPlugin({
      baseHref: '/'
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
};
