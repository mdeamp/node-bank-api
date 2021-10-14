const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'API em funcionamento!',
  });
});

app.listen(3030, () => {
  console.log('API Iniciada - Porta 3030');
});
