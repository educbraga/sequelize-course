const faker = require('faker');

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Laptop', [{
      brand: 'Apple',
      model: 'MacBook Pro 13',
      price: 8000,
      year_manufacture: 2020,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Laptop', null, {});
  }
};