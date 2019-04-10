module.exports = {
    publicPath: './',
    productionSourceMap: false,
    devServer: {
        https:false,
        proxy: {
            '/api': {
                target: 'http://localhost:5000/api/', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}