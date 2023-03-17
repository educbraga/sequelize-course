async function teste() {

	const database = require('./db');
	const Product = require ('./models/product');
	const Manufacturer = require ('./models/manufacturer');

	await database.sync();

	const manufacturer = await Manufacturer.create({
		name: 'Apple',
	});
	console.log(manufacturer);

	const product = await Product.create({
		name: 'Macbook Pro',
		price: 2000,
		description: 'A Pro laptop',
		manufacturerId: manufacturer.id, 
	});
	console.log(product);

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

	// const productUpdate = await Product.findByPk(2);
	// productUpdate.name = 'Macbook Pro M1';
	// await productUpdate.save();

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

