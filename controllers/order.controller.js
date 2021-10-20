const orderService = require('../services/order.service');

const get = async (req, res) => {
  try {
    const order = await orderService.getOrderById(req.params.id);
    res.status(200).json(order);
  } catch (err) {
    res.status(404).json({
      message: `Não foi encontrada um pedido com este número: ${req.params.id}`,
      error: err.toString(),
    });
  }
};

module.exports = {
  get,
};
