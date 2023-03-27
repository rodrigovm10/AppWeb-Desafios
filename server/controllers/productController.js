const Product = require('../models/Product');
const asyncHandler = require('express-async-handler');

const getAllProducts = asyncHandler(async (req, res) => {
	const products = await Product.find().lean();
	if (!products?.length) {
		return res.status(400).json({ message: 'No se encontraron productos' });
	}
	res.json(products);
});

const createNewProduct = asyncHandler(async (req, res) => {
	const { name, description, price, images } = req.body;
	//Confirma data
	if (!name || !description || !price || !images) {
		return res.status(400).json({ message: 'Todos los campos son requeridos' });
	}

	const productObject = { name, description, price, images };

	//Create and store new product
	const product = await Product.create(productObject);

	if (product) {
		//created
		res.status(201).json({ message: `Nuevo Producto ${name} Creado` });
	} else {
		res.status(400).json({ message: 'Datos de Producto invalidos' });
	}
});

const updateProduct = asyncHandler(async (req, res) => {
	const { id, name, description, price, images } = req.body;

	//Confirm data
	if (!id || !name || !description || !price || !images) {
		return res.status(400).json({ message: 'Todos los campos son requeridos' });
	}

	const product = await Product.findById(id).exec();

	if (!product) {
		return res.status(400).json({ message: 'Producto no encontrado' });
	}

	//Check for duplicate
	const duplicate = await Product.findOne({ id }).lean().exec();
	//Allow updates to the original user
	if (duplicate && duplicate?._id.toString() !== id) {
		return res.status(409).json({ message: 'Id duplicado' });
	}

	product.name = name;
	product.description = description;
	product.price = price;
	product.images = images;

	const updatedProduct = await product.save();

	res.json({ message: `${updatedProduct.name} actualizado` });
});

const deleteProduct = asyncHandler(async (req, res) => {
	const { id } = req.body;

	if (!id) {
		return res.status(400).json({ message: 'ID requerido' });
	}

	const producto = await Product.findById(id).exec();

	if (!producto) {
		return res.status(400).json({ message: 'Producto no encontrado' });
	}

	const result = await producto.deleteOne();

	const reply =
		await `Producto ${result.name} con el ID ${result._id} eliminado`;

	res.json(reply);
});

module.exports = {
	getAllProducts,
	createNewProduct,
	updateProduct,
	deleteProduct,
};
