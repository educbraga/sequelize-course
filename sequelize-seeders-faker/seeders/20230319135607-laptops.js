const { faker } = require('@faker-js/faker');
faker.locale = 'pt_BR';

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let laptops = [];
    for (let i = 0; i < 1000; i++) {
      laptops.push({
      brand: faker.commerce.productAdjective(),
      model: faker.commerce.product(),
      price: faker.commerce.price(2000, 7000),
      year_manufacture: 2020,
      });
    }
    await queryInterface.bulkInsert('Laptops', laptops, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Laptops', null, {});
  }
};