const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Tudo certo!',
  });
});

app.listen(3030, () => {
  console.log('API Iniciada - Porta 3030');
})