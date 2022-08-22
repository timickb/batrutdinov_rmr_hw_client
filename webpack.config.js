const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const API_URL = "http://51.250.65.73"

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.tsx',

    devServer: {
        historyApiFallback: true,
        port: 9000,
        open: true,
        static: {
            directory: path.join(__dirname, "/"),
        },
        proxy: {
            "/api/v1": {target: API_URL, changeOrigin: true}
        },
    },

    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
    },

    plugins: [
        new HTMLWebpackPlugin({template: './index.html'}),
        new CleanWebpackPlugin(),
    ],

    module: {
        rules: [
            { test: /\.tsx?$/, exclude: /node_modules/, use: 'ts-loader'},
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|jpg|gif|svg)$/, type: 'asset/resource', use: 'file-loader' },
        ]
    }
}