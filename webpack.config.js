const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js"
  },
  devServer: {
    port: 3000
  } ,
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/views/index.pug'
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  }
}

module.exports = (env, args) => {
  console.log('===================');
  console.log(env);
  console.log('++++++++++++++++++++');
  console.log(args);
  console.log('====================');
  return config;
}