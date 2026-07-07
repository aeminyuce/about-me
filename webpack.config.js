const fs = require('fs');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = {
    output: {
        filename: 'js/[name].[contenthash].js',
        chunkFilename: 'js/[name].[contenthash].js',
        publicPath: '/',
        clean: true,
    },
    optimization: {
        minimize: true,
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
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        allowTsInNodeModules: true,
                    }
                }
            },
            {
                test: /\.(ts|tsx)?$/,
                exclude: [/node_modules\/(?!(uilab|uilab-icons)\/).*/],
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    }
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.svg$/,
                use: 'svg-url-loader',
            },
        ],
    },
}

module.exports = (env, argv) => {
    let outputPath;
    if (argv.mode === 'production') {
        config.devtool = false;
        config.mode = argv.mode;
        outputPath = 'build';
    }

    if (argv.mode === 'development') {
        config.devServer = {
            host: '0.0.0.0',
            port: 3000,
            // open: true,
            historyApiFallback: true,
            hot: true,
            devMiddleware: { writeToDisk: true },
            allowedHosts: 'all',
        };
        outputPath = 'dist';
    }

    const templatesDir = path.resolve(__dirname, 'templates');
    const htmlPlugins = fs.readdirSync(templatesDir)
        .filter(file => file.endsWith('.html'))
        .map(file => {
            return new HtmlWebPackPlugin({
                template: path.join(templatesDir, file),
                filename: file,
                favicon: './public/favicon.ico',
            });
        });

    config.output.path = path.resolve(__dirname, outputPath);
    config.plugins = [
        ...htmlPlugins,
        new Dotenv({
            path: './.env',
        }),
        argv.mode === 'development' && new Dotenv({
            path: './.env.local',
            systemvars: true,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'public',
                    noErrorOnMissing: true,
                    globOptions: {
                        ignore: ['**/.DS_Store', '**/Thumbs.db']
                    }
                }
            ],
        }),
    ]

    return config;
};
