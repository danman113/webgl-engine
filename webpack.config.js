let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

const outputDir = process.env.outDir || 'docs'

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'out.js',
    path: path.join(__dirname, outputDir)
  },


  mode: 'development',

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.js', '.json']
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.ts$/, loader: 'ts-loader' },
      // For some reason I had to add in an extra match to get the last one to work...
      // Don't try using .shader
      { test: /\.(frag|vert|glsl)$/, loader: 'raw-loader' },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
      { test: /\.(png|jpe?g)$/, loader: 'file-loader' },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Demo',
      template: 'src/index.html',
      inject: 'head'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, outputDir),
    compress: true,
    hot: true,
    port: 9001
  }
}
