const cors = require('cors');

const corsMiddleware = cors({
  origin: 'http://localhost:8000',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials: true,
});

module.exports = corsMiddleware;

