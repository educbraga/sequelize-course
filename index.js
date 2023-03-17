//index.js
(async () => {
    const database = require('./db');
    const Product = require('./models/product');
    const Manufacturer = require('./models/manufacturer');
    const Category = require('./models/category');
    const CategoryProduct = require('./models/categoryProduct');

    try {
        Product.belongsTo(Manufacturer, {
            constraint: true, 
            foreignKey: 'idManufacturer'
        });
        Manufacturer.hasMany(Product, {
            foreignKey: 'idManufacturer'
        });

        Product.belongsToMany(Category, {
            foreignKey: 'idProduct',
            constraints: true,
            through: {
                model: CategoryProduct
            }
        })

        Category.belongsToMany(Product, {
            foreignKey: 'idCategory',
            constraints: true,
            through: {
                model: CategoryProduct
            }
        })

        const resultado = await database.sync({force: true});
        // const resultado = await database.sync();
        //console.log(resultado);

        const resultadoCreate = await Manufacturer.create({
            nome: 'Apple'
        })
        const idManufacturer = resultadoCreate.id;

        const resultadoCreate2 = await Product.create({
            nome: 'iPhone',
            preco: 5000,
            descricao: 'Smartphone da maçã',
            idManufacturer: idManufacturer
        })
        //console.log(resultadoCreate2);

        //const produto = await Product.findByPk(resultadoCreate2.id, {include: Manufacturer});
        //console.log(produto);
        //const manufacturer = await produto.getManufacturer();
        //console.log(manufacturer);

        //const manufacturer = await Manufacturer.findByPk(resultadoCreate.id, {include: Product});
        //console.log(manufacturer);
        //const produtos = await manufacturer.getProducts();
        //console.log(produtos);

        const resultadoCreate3 = await Category.create({
            nome: 'Telefones'
        })
        //console.log(resultadoCreate3);

        const produto = await Product.findByPk(resultadoCreate2.id);
        const category = await Category.findByPk(resultadoCreate3.id);
        //console.log(produto);
        // await produto.setCategories([category]);
        await category.setProducts([produto]);
    } catch (error) {
        console.log(error);
    }
})();
