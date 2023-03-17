// Isto aqui é o equivalente à um modelo/model.
// É uma classe que vai ser utilizada para criar objetos que representam uma linha na tabela 
// do banco de dados.
const { DataTypes } = require('sequelize');
const database = require('../db');
const Manufacturer = require('./manufacturer');
const Category = require('./category');
const CategoryProduct = require('./categoryProduct');

const Product = database.define('Product', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: DataTypes.DECIMAL,
  description: DataTypes.STRING,
});

//Se eu não tivesse definido o nome da foreignKey o sequelize teria definido ela para mim.
Product.belongsTo(Manufacturer, { constraints: true, foreignKey: 'manufacturerId' })

Manufacturer.hasMany(Product, {
  //Se eu não tivesse definido o nome da foreignKey, não seria necessário passar este parâmetro.
  foreignKey: 'manufacturerId'
});

Product.belongsToMany(Category, { through: CategoryProduct, foreignKey: 'productId', constraint: true });

Category.belongsToMany(Product, { through: CategoryProduct, foreignKey: 'categoryId', constraint: true });

module.exports = Product;

// Tipos de relacionamentos no sequelize:
// 1-1
// 1-N
// N:M