const express = require('express');
const accountController = require('../controllers/account.controller');

const router = express.Router();

router.get('/:id', accountController.getById);

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
