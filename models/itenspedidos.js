'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItensPedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ItensPedidos.belongsTo(models.Pedidos, {
        as: 'pedido',
        foreignKey: 'pedido_id',
      });

      ItensPedidos.belongsTo(models.Produtos, {
        as: 'produto',
        foreignKey: 'produto_id',
      });
    }
  }
  ItensPedidos.init(
    {
      pedido_id: DataTypes.INTEGER,
      produto_id: DataTypes.INTEGER,
      valor: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: 'ItensPedidos',
    }
  );
  return ItensPedidos;
};
