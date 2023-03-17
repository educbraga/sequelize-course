async function teste() {

	const database = require('./db');
	const Product = require ('./models/product');
	const Manufacturer = require ('./models/manufacturer');
	const Category = require ('./models/category');

	await database.sync();

	// Cuidado! O force recria o banco de dados e apaga todos os dados.
	// await database.sync({ force: true });

// CREATE

	// const manufacturer = await Manufacturer.create({
	// 	name: 'Apple',
	// });
	// console.log(manufacturer);

	// const product = await Product.create({
	// 	name: 'Macbook Pro',
	// 	price: 2000,
	// 	description: 'A Pro laptop',
	// 	manufacturerId: manufacturer.id, 
	// });
	// console.log(product);

// READ

	// const products = await Product.findAll();
	// console.log(products);

	// const product = await Product.findAll({
	// 	where: {
	// 		id: 1
	// 	}
	// })
	// console.log(product)

	// const productSearch = await Product.findByPk(1);
	// console.log(productSearch);

	// Lazy Loading / Carregamento tardio de relacionamentos
	// const productSearch = await Product.findByPk(1);
	// const manufacturer = await productSearch.getManufacturer();
	// console.log(manufacturer.name);

	// Eager Loading / Carregamento antecipado de relacionamentos
	// const productSearch = await Product.findByPk(1, { include: Manufacturer });
	// console.log(productSearch.Manufacturer.name);

	// Lazy Loading / Carregamento tardio de relacionamentos
	// const manufacturer = await Manufacturer.findByPk(1);
	// const products = await manufacturer.getProducts();
	// console.log(products);

	// Eager Loading / Carregamento antecipado de relacionamentos
	const manufacturer = await Manufacturer.findByPk(1, { include: Product });
	console.log(manufacturer.Products);

// UPDATE

	// const productUpdate = await Product.findByPk(2);
	// productUpdate.name = 'Macbook Pro M1';
	// await productUpdate.save();

// DELETE

	// const productDelete = await Product.findByPk(2);
	// await productDelete.destroy();

	// const product = await Product.findByPk(1);
	// await product.destroy()
	
	// await Product.destroy({
	// 	where: {
	// 		id: 4
	// 	}
	// })
}

teste();
