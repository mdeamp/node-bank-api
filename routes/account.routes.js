const express = require('express');
const accountController = require('../controllers/account.controller');

const router = express.Router();

router.get('/:id', accountController.getById);
router.get('/:id/balance', accountController.getBalanceById);
router.get('/:id/client', accountController.getClientById);

module.exports = router;
