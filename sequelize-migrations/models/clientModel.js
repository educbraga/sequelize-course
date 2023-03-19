const Sequelize = require('sequelize');
const database = require('../db');

const Client = database.define('client', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true,
      },
      email: Sequelize.STRING,
      telephone: {
        type: Sequelize.STRING,
        allowNull: true,
      }
})

module.exports = Client;