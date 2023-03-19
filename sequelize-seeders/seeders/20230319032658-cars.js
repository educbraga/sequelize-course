'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Cars', [{
        brand: 'BMW',
        model: 'm3',
        price: 200000,
        year_manufacture: 2000,
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Cars', null, {});
  }
};
