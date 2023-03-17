// Isto aqui é o equivalente à um modelo/model.
// É uma classe que vai ser utilizada para criar objetos que representam uma linha na tabela 
// do banco de dados.
const { DataTypes } = require('sequelize');
const database = require('../db');
const Manufacturer = require('./manufacturer');

const Product = database.define('Product', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: DataTypes.DECIMAL,
  description: DataTypes.STRING,
});

Product.belongsTo(Manufacturer, { constraints: true, foreignKey: 'manufacturerId' })

module.exports = Product;

// Tipos de relacionamentos no sequelize:
// 1-1
// 1-N
// N:M