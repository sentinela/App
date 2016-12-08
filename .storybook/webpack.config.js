const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /.less|.css$/,
        loaders: ["style", "css", "less", "postcss"],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ]
  }
}