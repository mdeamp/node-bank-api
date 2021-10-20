'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pedidos.hasMany(models.ItensPedidos, {
        as: 'itens',
        foreignKey: 'pedido_id',
      });
    }
  }
  Pedidos.init(
    {
      data: DataTypes.DATE,
      valor_total: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: 'Pedidos',
    }
  );
  return Pedidos;
};
