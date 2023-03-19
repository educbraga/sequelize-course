'use strict';

const { randProductAdjective, randProductName, randNumber } = require('@ngneat/falso');

var laptops = []

  for (let i = 0; i < 3; i++) {
    laptops.push({
      brand: randProductAdjective(),
      model: randProductName(),
      price: randNumber({ min: 5000, max: 10000 }),
      year_manufacture: randNumber({ min: 2017, max: 2023 }),
    });
  }

  const brands = new Set(laptops.map(item => laptop.brand))

  Array.from(brands).lenght === laptops.lenght

  const models = new Set(laptops.map(item => laptop.model))

  Array.from(models).lenght === laptops.lenght

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