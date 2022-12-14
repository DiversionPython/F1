const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //mode: 'development',
    entry: './src/index.js',
    output: {
        //filename: 'main.js',
        //filename: '[name].bundle.js',
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}    
