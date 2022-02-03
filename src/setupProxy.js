const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware("/get-user-auth", { 
        target: "https://auth.iqoption.com/api/v2/login", 
        changeOrigin: true, 
        pathRewrite: { '^/get-user-auth': '' } 
    }));
    
    app.use(createProxyMiddleware("/check-user-session", { 
        target: "https://auth.iqoption.com/api/v4/check-session", 
        changeOrigin: true, 
        pathRewrite: { '^/check-user-session': '' } 
    }));
    
    app.use(createProxyMiddleware("/fininfo", { 
        target: "https://fininfo.iqoption.com/api/graphql", 
        changeOrigin: true, 
        pathRewrite: { '^/fininfo': '' } 
    }));

    app.use(createProxyMiddleware("/get-user-avatar", { 
        target: "https://avatars.iqoption.com/api/v1/avatars/current", 
        changeOrigin: true, 
        pathRewrite: { '^/get-user-avatar': '' } 
    }));

    app.use(createProxyMiddleware("/broker-api", { 
        target: "https://iqoption.com/api", 
        changeOrigin: true, 
        pathRewrite: { '^/broker-api': '' } 
    }));

    app.use(createProxyMiddleware("/realtime", { 
        target: "wss://ws.iqoption.com/echo/websocket",
        ws: true,
        changeOrigin: true, 
        pathRewrite: { '^/realtime': '' } 
    }));
};