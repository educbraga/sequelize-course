const { faker } = require('@faker-js/faker');
faker.locale = 'pt_BR';

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      var laptops = [];
      for (let i = 0; i < 2; i++) {
        laptops.push({
          brand: faker.helpers.unique(faker.commerce.productAdjective()),
          model: faker.helpers.unique(faker.commerce.product()),
          price: faker.commerce.price(2000, 7000),
          year_manufacture: 2020,
        });
      }
    } catch (error) {
      console.log('O erro é: ' + error);
    }
    try{
      await queryInterface.bulkInsert('Laptops', laptops, {});
    } catch(error) {
      console.log('O erro2 é: ' + error)
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Laptops', null, {});
  }
};