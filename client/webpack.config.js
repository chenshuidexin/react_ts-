const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    mode: process.env.NODE_ENV == 'production' ? 'production' : 'development', //默认是开发模式
    entry: './src/index.tsx', //入口文件
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devtool: 'source-map', //调试工具，生成一个带有.map文件，这个map文件会和原始文件做一个映射，追踪到位置
    devServer: { //服务器启动
        hot: true, //热更新
        contentBase: path.join(__dirname, 'dist'), //html页面所在的相对目录
        historyApiFallback: { //brouserHistory的时候，刷新报404错误，自动重定向到index.html
            index: './index.html'
        }
    },
    resolve: { //解析
        alias: { //简单的引入模块
            "@": path.resolve(__dirname, 'src'),
            "~": path.resolve(__dirname, 'node_moudels')
        },
        //加载文件的时候，没有指定扩展名的时候，会自动寻找哪些扩展名;自动解析确定的扩展
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: { //处理项目中不同类型的模块
        rules: [ //创建模块时，匹配请求的规则数组
            {
                test: /\.(j|t)sx?$/, //匹配条件
                loader: 'ts-loader', //每一个入口文件对应着一个加载文件,必须有loader属性是字符串，使用loader解析选项
                exclude: /node_modules/, //node_modules文件夹不需要打包
            }, {
                enforce: 'pre', //默认顺序是从下往上处理，enforce:'pre' ---> 优先处理
                test: /\.(j|t)sx?$/,
                loader: 'source-map-loader',
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            }, {
                test: /\.(jpg|png|gif|svg|ipeg)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [ //插件,扩展webpack的功能，可以让webpack做任何和构建有关的事情
        new HtmlWebpackPlugin({//html模板所在的文件路径
            template: './src/index.html'
        }),
        //热更新插件
        new webpack.HotModuleReplacementPlugin()
    ]
}












/**
 *const  path= require('path')
 * join只是简单的链接，不解析真实路径
 * console.log(path.join('a','b','c'))  --->  a\b\c
 * resolve解析出全部的真实路径，相对于盘符根目录的绝对路径
 * console.log(path.resolve('a','b','c')) ---> E:\0522_first\0606_hooks\client\a\b\c
 *  
 */