const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:5050',
            changeOrigin: true,
        })
    );
    // app.use(
    //     '/v4',
    //     createProxyMiddleware({
    //         target: 'https://api.football-data.org',
    //         changeOrigin: true,
    //     })
    // );
};