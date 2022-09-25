const Product = require('../models/product');

module.exports = async (req, res, next) => {
    try {
        const { name, description, image } = req.body;
        const existProduct = await Product.findOne({ name });
        if (existProduct) {
            res.status(409).send({ error: 'Product already exist' });
            return;
        }

        //or you can also call Product.create() and pass an object as the argument;
        const product = new Product(name, description, image);
        await product.save();
        res.status(201).send({ message: 'Succesfully created' });
    } catch (error) {
        res.status(500).send({ error });
    }
}