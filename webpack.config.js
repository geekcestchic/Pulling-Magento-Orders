var path = require('path')

module.exports = {
    entry: "./lib/web/main.js",
    output: {
        path: __dirname,
        filename: "./lib/web/bundle.js"
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                include: [
                    path.resolve(__dirname, "lib"),
                ],
                // Only run `.js` and `.jsx` files through Babel
                test: /\.jsx?$/,
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react'],
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};
