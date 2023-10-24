const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getSingleProduct } = require('../controller/productController')
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router();



router.route('/products').get(isAuthenticatedUser,authorizeRoles("admin"), getAllProducts);
router.route('/product/new').post(isAuthenticatedUser, authorizeRoles("admin"),createProduct);
router.route('/product/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct).delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct).get(getSingleProduct);
// // this is b'coz both route path will be same.
// // router.route('/product/:id').put(updateProduct);
// // router.route('/product/:id').put(deleteProduct);
// // router.route('/product/:id').get(getSingleProduct);

module.exports = router
