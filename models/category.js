const { DataTypes } = require('sequelize');
const database = require('../db');

const Category = database.define('Category', {
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

module.exports = Category;