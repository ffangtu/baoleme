module.exports = {
    publicPath: './',
    productionSourceMap: false,
    devServer: {
        https:false,
        proxy: {
            '/api': {
                target: 'http://localhost:5000/api/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}