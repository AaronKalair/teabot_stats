module.exports = {
    cache: true,
    devtool: 'cheap-source-map',
    resolve: {
        extensions: ['.jsx', '.js'],
        modules: ['app', 'node_modules']
    },
    entry: './app.js',
    output: {
        path: '.',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: 'node_modules',
                options: {cacheDirectory: true}
            }
        ]
    }
};
