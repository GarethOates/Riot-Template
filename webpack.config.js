var webpack = require('webpack');

module.exports = {
    entry: './app/index',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot'
        })
    ],
    module: {
        preLoaders: [{
            test: /\.tag$/,
            exclude: /node_modules/,
            loader: 'riotjs-loader',
            query: {
                type: 'none'
            }
        }],
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$|\.tag$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                     presets: ['es2015']
                 }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.tag']
    },
    devServer: {
        contentBase: './public'
    }
};
