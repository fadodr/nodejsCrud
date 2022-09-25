const Product = require("../models/product");

module.exports = async (req, res, next) => {
    try {
        const page = req.query.page;
        const products = await Product.find(page);
        res.status(200).json({
            message: 'All products fetched',
            data: products
        });
    } catch (error) {
        res.status(500).send({ error : error.message });
    }
}