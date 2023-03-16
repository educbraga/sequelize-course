const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize-tutorial', 'root', 'secret',{
	dialect: 'mysql',
	host: 'localhost',
	port: '3306',
});

module.exports = sequelize;