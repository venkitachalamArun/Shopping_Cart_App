import express, { Router } from 'express';

const router: Router = express.Router();

import { showAllProducts, addProduct, updateProduct, deleteProduct} from '../controllers/products';
//GET Products
router.get('/showAllProducts', showAllProducts);
//POST Products
router.post('/addProduct', addProduct);
//UPDATE Products
router.put('/updateProduct/:productId', updateProduct)
// DELETE Products
router.delete('/:productId', deleteProduct);

export default router;