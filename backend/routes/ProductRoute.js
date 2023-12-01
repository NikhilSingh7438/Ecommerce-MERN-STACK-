import express from "express";
import { 
    getProduct, 
    getProductById,
    saveProduct,
    deleteProduct
} from "../controllers/ProductController.js";
 
const router = express.Router();
 
router.get('/products', getProduct);
router.get('/products/:id', getProductById);
router.post('/products/add', saveProduct);
router.delete('/products/:id', deleteProduct);
 
export default router;