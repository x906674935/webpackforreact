const webpack  = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');//自动产出html文件

module.exports = {
    mode:"development",
    devtool:false,//不生成sourceMap
    entry:'./src/index.tsx',
    output:{
        path:path.join(__dirname,"dist"),//生成文件的路径：当前路径下的dist
        filename:'[name].[hash:5].js',
    },
    devServer:{                    //开发服务器
        hot :true,
        contentBase:path.join(__dirname,'dist'),
        historyApiFallback:{  // hashRouter 刷新拿不到参数之后重定向到首页
            index:'./index.html'
        }
    },
    resolve:{   // 解析
        extensions:[".ts",".tsx",".js",".jsx",".json",".less"],
        alias:{
            "@":path.resolve("src")   //绝对路径
        }
    },
    module:{
        rules:[
            {
                test:/(\.tsx|\.ts)$/,
                loader:'ts-loader',   //新项目不需要 babel-loader
            }
        ]
    },
    plugin:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin() //热更新
    ]
    
}