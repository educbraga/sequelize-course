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