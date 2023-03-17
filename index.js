(async () => {

	const database = require('./db');
	const Product = require ('./product');

	await database.sync();

	// const product = await Product.create({
	// 	name: 'Macbook Air',
	// 	price: 1000,
	// 	description: 'A laptop',
	// });
	// console.log(product);

	// const products = await Product.findAll();
	// console.log(products);

	// const product = await Produxt.findAll({
	// 	where: {
	// 		id: 1
	// 	}
	// })
	// console.log(product)

	// const productSearch = await Product.findByPk(1);
	// console.log(productSearch);

	// const productUpdate = await Product.findByPk(1);
	// productUpdate.name = 'Macbook Pro';
	// await productUpdate.save();

	// const productDelete = await Product.findByPk(1);
	// await productDelete.destroy();

	// await product.destroy({
	// 	where: {
	// 		id: 1
	// 	}
	// })
});

