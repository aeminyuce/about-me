const path = require("path");
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const config = {
    output: {
        filename: 'js/[name].[contenthash].js',
        chunkFilename: 'js/[name].[contenthash].js',
        publicPath: 'auto',
        clean: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.less'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: [/node_modules\/(?!(uilab|uilab-icons)\/).*/],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.(ts|tsx)?$/,
                exclude: [/node_modules\/(?!(uilab|uilab-icons)\/).*/],
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            allowTsInNodeModules: true,
                        }
                    }
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                strictMath: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                use: "svg-url-loader",
            },
        ],
    },
}

module.exports = (env, argv) => {
    config.output.path = path.resolve(__dirname, 'dist');
    if (argv.mode === 'production') {
        config.devtool = false;
    }
    if (argv.mode === 'development') {
        config.devServer = {
            host: 'localhost',
            port: 3000,
            open: true,
            historyApiFallback: true,
            hot: true,
        };
    }
    const customVars = {
        PROJECT_NAME: JSON.stringify('A. Emin Yüce'),
        GITHUB_URL: JSON.stringify('https://github.com/aeminyuce'),
        DRIBBBLE_URL: JSON.stringify('https://dribbble.com/aeminyuce'),
        LINKEDIN_URL: JSON.stringify('https://www.linkedin.com/in/aeminyuce'),
    };
    config.plugins = [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            favicon: "./public/favicon.ico",
        }),
        new webpack.DefinePlugin({
            process: { env: customVars }
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "public",
                    noErrorOnMissing: true,
                }
            ],
        }),
    ]
    return config;
};
