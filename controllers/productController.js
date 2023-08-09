const Product = require('../models/productModel')
const asyncHandler = require('express-async-handler')
//gets all data by using "find" method

const getAllProducts = asyncHandler(async (req, res) => {
    try {
        const products = await Product.ProductData.find({});
        res.status(200).json(products)
    } catch (err) {
        res.status(500)
        throw new Error(err.message)
    }
})
//get a product by id using "findById" method
const getProductById = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const ProductDataById = await Product.ProductData.findById(id);
        res.status(200).json({
            status: true,
            result: ProductDataById
        })
    } catch (err) {
        res.status(500)
        throw new Error(err.message)
    }
})
//Create operation or Insert a new product by create method
const CreateNewProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.ProductData.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(err.message)
    }
    // console.log(req.body)
    // res.send(req.body)
})
//Update the product based on ID using findByIdAndUpdate method
const UpdateProductById = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.body)
        const product = await Product.ProductData.findByIdAndUpdate(id, req.body);
        //we cannot find any product in database.
        if (!product) {
            res.status(404)
            throw new Error(`Can not find any product ${id}`)
        } else {
            const updatedProduct = await Product.ProductData.findById(id);
            res.status(200).json(updatedProduct);
        }
    } catch (err) {
        res.status(500)
        throw new Error(err.message)
    }
})
// delete a product by using "findByIdAndDelete"
const deleteProductById = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        console.log("ID::", id)
        const deletePoductId = await Product.ProductData.findByIdAndDelete(id);
        if (!deletePoductId) {
            res.status(404)
            throw new Error(`Can not find any product ${id}`)
        }
        else res.status(200).json({ status: true, result: deletePoductId, Message: `Successfully deleted the Product from collections` })
    } catch (err) {
        res.status(500)
        throw new Error(err.message)
    }
})

//Create A New User 
const CreatNewUser = asyncHandler(async (req, res) => {
    try {
        const product = await Product.Users.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(err.message)
    }
    // console.log(req.body)
    // res.send(req.body)
})
module.exports = {
    getAllProducts,
    getProductById,
    CreateNewProduct,
    UpdateProductById,
    deleteProductById,
    CreatNewUser
}