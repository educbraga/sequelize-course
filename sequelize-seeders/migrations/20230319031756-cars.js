'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', { 
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
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Cars');
  }
};
