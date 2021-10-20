'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('ItensPedidos', {
      type: 'foreign key',
      fields: ['pedido_id'],
      name: 'itens_pedidos_pedido_fk',
      references: {
        table: 'Pedidos',
        field: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      'ItensPedidos',
      'itens_pedidos_pedido_fk'
    );
  },
};
