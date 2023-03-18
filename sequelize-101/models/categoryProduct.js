const Sequelize = require('sequelize');
const database = require('../db');

const CategoryProduct = database.define('categoryProduct', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = CategoryProduct;