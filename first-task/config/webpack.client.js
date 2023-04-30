import webpack from 'webpack';
import MiniCssExtractPlugin, { loader } from 'mini-css-extract-plugin';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./webpack.common').default.createConfig({
  target: 'client',
});

export default {
  ...config,

  module: {
    ...config.module,

    rules: [
      ...config.module.rules,

      {
        test: /\.css$/,
        use: [loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    ...config.plugins,

    new MiniCssExtractPlugin({
      filename: 'main.css',
      // filename: '[hash:16].css',
    }),
  ],
};
