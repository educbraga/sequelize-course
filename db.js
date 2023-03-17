const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize-tutorial', 'root', 'secret',{
	dialect: 'mysql',
	host: 'localhost',
	port: '3310',
});

module.exports = sequelize;