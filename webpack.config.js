const PROD = JSON.parse(process.env.PROD_ENV || '0');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractCssPlugin = new ExtractTextPlugin('style.css', { allChunks: true });

const HtmlPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = new HtmlPlugin({
  title: 'Undertake',
  favicon: './assets/images/favicon.ico',
  template: './assets/index.ejs',
  minify: {
    removeComments: true,
    useShortDoctype: true
  }
});

const ProductionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
});

const Uglify = new webpack.optimize.UglifyJsPlugin({
  compress: { warnings: true }
});

const Deduped = new webpack.optimize.DedupePlugin();

const OrderPlugin = new webpack.optimize.OccurrenceOrderPlugin();

const VendorsPlugins = new webpack.ProvidePlugin({
});

const HMRP = new webpack.HotModuleReplacementPlugin();

const commonPlugins = [HtmlWebpackPlugin, ExtractCssPlugin, VendorsPlugins];

const entry = PROD ? './src/index.jsx' : [
  'webpack-dev-server/client?http://0.0.0.0:7777',
  'webpack/hot/only-dev-server',
  './src/index.jsx'
];

const loaders = PROD ? ['babel'] : ['react-hot', 'babel'];

module.exports = {
  entry,
  devtool: 'cheap-source-map',
  output: {
    path: './dist',
    filename: 'bundle.js',
    sourceMapFilename: '[file].map',
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },

  plugins: PROD ? [
    ...commonPlugins,
    ProductionPlugin,
    Deduped,
    OrderPlugin,
    Uglify
  ] : [
    HMRP,
    ...commonPlugins
  ],

  devServer: {
    inline: true,
    port: 7777,
    contentBase: './dist',
    hot: true
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?mimetype=image/png'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url?prefix=font/&limit=5000'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ]
  }
};
