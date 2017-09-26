import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const isProd = true; // base this off env variables

const config = {
  stats: {
    children: false,
  },
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {},
}

// rules

config.module.rules = [
  {
    test: /\.js$/,
    use: [
      {
        loader: 'babel-loader',
        options: {},
      },
    ],
  },
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      use: [
        {
          loader: 'css-loader',
          options: {
            minimize: isProd,
          },
        },
      ],
      fallback: 'style-loader',
    }),
  },
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      use: [
        {
          loader: 'css-loader',
          options: {
            minimize: isProd,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            includePaths: [
              'node_modules',
              path.resolve(__dirname, 'app', 'styles'),
            ],
          },
        }
      ],
      fallback: 'style-loader',
    }),
  },
]

// resolve
config.resolve = {
  modules: [
    'node_modules',
    path.resolve(__dirname, 'app'),
  ],
  extensions: ['.js', '.css', '.scss'],
}

// plugins
config.plugins = [
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new webpack.NoEmitOnErrorsPlugin(),
  new ExtractTextPlugin({
    filename: isProd
      ? 'dist/styles/app.css'
      : 'styles/app.css',
    allChunks: true,
    disable: false,
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(
      isProd ? 'production' : 'development',
    ),
  }),
]

// more production things

if (isProd) {
  config.devtool = 'hidden-source-map'
  // anything else you need to do
}

export default config
