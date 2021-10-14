const express = require('express');
const cors = require('cors');
const accountRoutes = require('./routes/account.routes');

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use('/account', accountRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API em funcionamento!',
  });
});

app.listen(3030, () => {
  console.log('API Iniciada - Porta 3030');
});
