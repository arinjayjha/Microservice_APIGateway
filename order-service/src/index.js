const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(cors());
app.use(morgan('dev'));

app.get('/orders', (req, res) => {
  res.json([{ id: 101, item: 'Book' }]);
});

app.get('/health', (req, res) => res.json({ status: 'ok', service: 'order-service' }));

app.listen(PORT, () => {
  console.log(`Order Service running on http://localhost:${PORT}`);
});
