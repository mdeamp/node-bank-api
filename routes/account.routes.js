const express = require('express');
const accountController = require('../controllers/account.controller');

const router = express.Router();

router.get('/:id', accountController.get);
router.post('/', accountController.create);

module.exports = router;
