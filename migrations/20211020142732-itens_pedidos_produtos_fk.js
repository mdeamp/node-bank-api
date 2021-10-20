'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('ItensPedidos', {
      type: 'foreign key',
      fields: ['produto_id'],
      name: 'itens_pedidos_produtos_fk',
      references: {
        table: 'Produtos',
        field: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint(
      'ItensPedidos',
      'itens_pedidos_produtos_fk'
    );
  },
};
