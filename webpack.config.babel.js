/**
 * Created by claudio on 2019-09-19.
 */
import path from 'path';

const name = 'TestDefaultValueDynValue';

const config = {
    target: 'web',
    mode: 'development',
    entry: [
        'immutable',
        './src/TestDefaultValueDynValue.js'
    ],
    output:{
        path: path.resolve(__dirname, './build/com.blockchainofthings.PawExtensions.' + name),
        publicPath: '/build/',
        filename: name + '.js'
    },
    module: {
        rules: [{
            use: [{
                loader: 'babel-loader',
            }],
            include: [
                path.resolve(__dirname, './src')
            ],
            test: /\.jsx?$/
        }]
    }
};

module.exports = config;
