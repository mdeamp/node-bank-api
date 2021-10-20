const express = require('express');
const { authorize } = require('../middlewares/authorize.mid');
const orderController = require('../controllers/order.controller');

const router = express.Router();

router.get('/:id', authorize, orderController.get);

module.exports = router;
