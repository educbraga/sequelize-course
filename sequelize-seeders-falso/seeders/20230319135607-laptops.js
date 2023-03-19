'use strict';

const { faker } = require('@faker-js/faker');
faker.locale = 'pt_BR';

var laptops = []

  for (let i = 0; i < 3; i++) {
    laptops.push({
      brand: faker.commerce.productAdjective(),
      model: faker.commerce.product(),
      price: faker.commerce.price(2000, 7000),
      year_manufacture: 2020,
    });
  }

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try{
      await queryInterface.bulkInsert('Laptops', laptops, {});
    }catch(error){
      console.log(error)
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Laptops', null, {});
  }
};