const express = require('express');
const accountsMock = require('../mocks/accounts');

const router = express.Router();

router.get('/:id', (req, res) => {
  const account = accountsMock.find(
    (acc) => acc.account_number === req.params.id
  );

  if (!account) {
    res.status(404).json({
      message: `Não foi encontrada uma conta com este número: ${req.params.id}`,
    });
  }

  res.status(200).json(account);
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
