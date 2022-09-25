const Product = require("../models/product");

module.exports = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if (!product) {
          res.status(404).send({ error: "Product with id not found" });
          return;
        }
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            message: 'Product deleted succesfully'
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}