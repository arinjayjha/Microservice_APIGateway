const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(morgan('dev'));

app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }]);
});

app.get('/health', (req, res) => res.json({ status: 'ok', service: 'user-service' }));

app.listen(PORT, () => {
  console.log(`User Service running on http://localhost:${PORT}`);
});
