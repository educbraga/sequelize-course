'use strict';

const Chance = require('chance');
const chance = new Chance();

const laptops = [];

let uniqueModels = chance.unique(chance.word, 100)

for (let i = 1; i < 100; i++) {
  laptops.push({
    brand: chance.word(),
    model: uniqueModels[i],
    price: chance.integer({min: 5000, max: 10000}),
    year_manufacture: chance.year({min: 2017, max: 2023}),
  });
}

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