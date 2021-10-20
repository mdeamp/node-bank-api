const models = require('../models');

const getOrderById = async (orderId) => {
  const order = await models.Pedidos.findByPk(orderId, {
    include: [
      {
        as: 'itens',
        model: models.ItensPedidos,
        include: [
          {
            as: 'produto',
            model: models.Produtos,
          },
        ],
      },
    ],
  });

  const orderMap = {
    numeroDoPedido: order.id,
    itens: order.itens,
  };

  orderMap.itens = orderMap.itens.map((item) => {
    return {
      id: item.id,
      nome: item.produto.descricao,
    };
  });

  if (!order) {
    throw new Error('Not Found!');
  }

  return orderMap;
};
module.exports = {
  getOrderById,
};
