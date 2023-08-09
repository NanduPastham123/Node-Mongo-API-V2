const express = require('express')
const router = express.Router();
const ProductRoutes = require('../controllers/productController')

//PRODUCT ROUTES
router.get("/Allproducts",ProductRoutes.getAllProducts)
router.get('/ProductbyId/:id',ProductRoutes.getProductById)
router.post('/CreateProduct',ProductRoutes.CreateNewProduct)
router.post('/Updateproduct/:id',ProductRoutes.UpdateProductById)
router.delete('/deleteProduct/:id',ProductRoutes.deleteProductById)

//USERS ROUTES
router.post('/CreateUSer',ProductRoutes.CreatNewUser)
module.exports = router;
