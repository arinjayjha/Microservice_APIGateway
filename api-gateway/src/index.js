const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({
    message: 'API Gateway',
    routes: ['/api/users', '/api/orders']
  });
});

app.use(
  '/api/users',
  createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
    pathRewrite: { '^/api/users': '/users' },
    logLevel: 'warn'
  })
);

app.use(
  '/api/orders',
  createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true,
    pathRewrite: { '^/api/orders': '/orders' },
    logLevel: 'warn'
  })
);

app.get('/health', (req, res) => res.json({ status: 'ok', service: 'api-gateway' }));

app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});
