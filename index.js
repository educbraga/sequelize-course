(async () => {

	const database = require('./db');
	const Product = require ('./product');

	await database.sync();

	// const product = await Product.create({
	// 	name: 'Macbook Pro',
	// 	price: 2000,
	// 	description: 'A Pro laptop',
	// });
	// console.log(product);

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

	const productUpdate = await Product.findByPk(1);
	productUpdate.name = 'Macbook Air M1';
	await productUpdate.save();

	// const productDelete = await Product.findByPk(1);
	// await productDelete.destroy();

	// await product.destroy({
	// 	where: {
	// 		id: 1
	// 	}
	// })
})();

