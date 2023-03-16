const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelizeTutorial', 'root', 'secret',{
	dialect: 'mysql',
	host: 'localhost',
	port: '3306',
});

module.exports = sequelize;