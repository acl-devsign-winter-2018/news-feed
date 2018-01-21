/* eslint-env node */
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',

  //What do we want to call the output, and where fo we put it?
  output: {
    filename: 'bundle.js',
    //This path is for npm run build, npm start (webpackdevserver) runs in a temp folder
    path: `${__dirname}/build`
  },
  //give us source maps (we debug code we wrote, not what ended up getting "built")
  devtool: 'inline-source-map',
  //These add high-level functionality to webpack
  plugins: [
    //creat an index.html based on our template, will add in <script> to bundle.js
    new HtmlPlugin({ template: './src/index.html' }),
  ],
  module: {
    //"loaders" tell webpack how to require (or import) things
    rules: [
      {
        test: /.html$/,
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true,
            attrs: false
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: { 
              importLoaders: 1, 
              sourceMap: true 
            }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }

          }
        ]
      }
    ]
  }
};
