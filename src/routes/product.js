const router = require('express').Router();

const addProduct = require('../controllers/addProduct');
const fetchAllProducts = require('../controllers/fetchAllProduct');
const fetchProduct = require('../controllers/fetchProduct');
const updateProduct = require('../controllers/updateProduct');
const deleteProduct = require('../controllers/deleteProduct');

router.post('/add-product', addProduct);
router.get("/products", fetchAllProducts);
router.get("/product/:id", fetchProduct);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;