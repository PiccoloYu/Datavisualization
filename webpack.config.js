var webpack = require('webpack');
//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {//注意这里是exports不是export
    entry: [__dirname+'/src/main.js'],
    output: {//输出目录
        path: __dirname + "/build",//打包后的js文件存放的地方
        filename: "bundle.js"//打包后的js文件名
    },
    //webpack-dev-server配置
    devServer: {
        contentBase:  "./",//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        port: 8082,//设置默认监听端口，如果省略，默认为"8080",
        inline:true,
        hot:true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//热模块替换插件
        new webpack.BannerPlugin('lzy版权所有！')
    ],
    watchOptions: {//watch自动打包
        poll: 1000, //检测代码修改时间，以毫秒为单位
        //aggregeateTimeout: 500, //防止重复保存而发生重复编译错误，这里设置的500为半秒内重复保存，不进行打包操作
        ignored: /node_modules/ //不监听目录，使用正则匹配
    },
};