let webpack = require('webpack'),
    path = require('path'),
    {VueLoaderPlugin} = require('vue-loader');

console.log( path.resolve(__dirname, './public'));

module.exports = {
    entry: "./src/main.js",

    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'app.js',
        publicPath: './public'
    },

    resolve: {
        alias: {
            '@app': path.resolve(__dirname, './src'),
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    { loader: 'vue-loader' }
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]
};