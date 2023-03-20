import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const router = Router();

const productsController = new ProductsController();

router.post('/', productsController.create);

export default router;
