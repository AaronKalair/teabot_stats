module.exports = {

    cache: true,
    devtool: 'cheap-source-map',
    resolve: {
        extensions: ["", ".jsx", ".ts", ".tsx", ".js"],
        modulesDirectories: ["app", "node_modules"],
    },
    entry: './app.js',
    output: {
        path: '.',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, loader: "babel-loader",
                exclude: "node_modules",
                query: {cacheDirectory: true,
                        presets: ['stage-0', 'es2015', 'react']}
            },
            {
                test: /\.tsx?$/, loader: "ts-loader"
            }

        ]

    }

}
