// Isto aqui é o equivalente à um modelo/model.
// É uma classe que vai ser utilizada para criar objetos que representam uma linha na tabela 
// do banco de dados.
const { DataTypes } = require('sequelize');
const database = require('./db');

const Product = database.define('User', {
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

module.exports = Product;