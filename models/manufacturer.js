const { DataTypes } = require('sequelize');
const database = require('../db');

const Product = database.define('Manufacturer', {
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
});

module.exports = Manufacturer;