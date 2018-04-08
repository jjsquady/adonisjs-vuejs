
const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  entry: './resources/assets/js/app.js',
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, 'public/js')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: 'css-loader'
      }
    ]
  },
  resolve:
    {
      extensions: ['*', '.js', '.jsx', '.vue'],
      alias: {'vue$': 'vue/dist/vue.common.js'}
    }
};
