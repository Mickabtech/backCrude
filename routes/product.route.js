const express = require('express');
const router = express.Router()



const {getProducts, getProduct, createProducts, updateProducts, deleteProducts} = require('../controllers/product.controller.js');


//GET all products
router.get("/", getProducts)

//GET product by id
router.get("/:id", getProduct)

//Create Products
router.post("/", createProducts)

//Edit or Update Products
router.put('/:id', updateProducts)

//Delete Product by ID
router.delete('/:id', deleteProducts )


module.exports = router;