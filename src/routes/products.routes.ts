import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import productValidate from '../middwares/validateProduct';

const router = Router();

const productsController = new ProductsController();

router.get('/', productsController.getAll);
router.post('/', productValidate, productsController.create);

export default router;
