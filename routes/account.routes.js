const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Dados de conta!',
  });
});

router.get('/balance', (req, res) => {
  res.status(200).json({
    message: 'Saldo de conta!',
  });
});

router.get('/client', (req, res) => {
  res.status(200).json({
    message: 'Cliente da conta!',
  });
});

module.exports = router;