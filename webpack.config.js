let path = require('path')
let { readdirSync } = require('fs')
let HtmlWebpackPlugin = require('html-webpack-plugin')

const outputDir = process.env.outDir || 'docs/'
const folders = readdirSync(path.normalize('./examples'), { withFileTypes: true })
  .filter(node => node.isDirectory()).map(node => node.name)
const entries = folders.reduce((obj, name) => {
  obj[name] = path.resolve(path.join('./examples', name, 'index.ts'))
  return obj
}, {})

const htmlFiles = folders.map(name => new HtmlWebpackPlugin({
  title: name,
  template: 'src/template.html',
  filename: `${name}.html`,
  inject: 'head',
  chunks: [name]
}))

/**
 * TODO:
 *  - Extract duplicate logic into a base webpack config or consolidate into one
 */

module.exports = {
  entry: entries,
  output: {
    filename: '[name].js',
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
      { test: /\.(png|jpe?g)$/, loader: 'file-loader' },
      // For some reason I had to add in an extra match to get the last one to work...
      // Don't try using .shader
      { test: /\.(frag|vert|glsl)$/, loader: 'raw-loader' }
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  plugins: [
    ...htmlFiles,
    new HtmlWebpackPlugin({
      title: 'Webgl Engine',
      template: 'src/index.html',
      filename: `index.html`,
      folders,
      inject: 'head',
      chunks: []
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, outputDir),
    // serveIndex: true,
    // hot: true,
    port: 9001
  }
}
