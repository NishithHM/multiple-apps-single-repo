const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
const argv = require('yargs').argv
const appConfig = require('./src/config.json')

const appName = argv.app
var sourcePath = path.join(__dirname, './src');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true
     },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_module/,
                use: 'babel-loader'
            },
            {
                test: path.resolve(sourcePath,'app1.js'),
                loader:path.resolve(sourcePath,'..','magic-loader.js'),
                options:{appName, appConfig}
            },
            {
                test: /\.css?$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve( __dirname, 'public/index.html' ),
            filename: 'index.html'
        })
    ]
};