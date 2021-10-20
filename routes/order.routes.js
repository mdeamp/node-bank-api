const express = require('express');
const orderController = require('../controllers/order.controller');

const router = express.Router();

router.get('/:id', orderController.get);

module.exports = router;
