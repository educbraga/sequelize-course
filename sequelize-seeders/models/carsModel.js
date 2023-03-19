const Sequelize = require('sequelize');
const database = require('../db');

const Car = database.define('car', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true,
        },
        brand: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        model: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        year_manufacture: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
})

module.exports = Car;