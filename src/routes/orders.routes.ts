import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
import orderValidate from '../middwares/validateOrder';
import verifyToken from '../middwares/verifyToken';

const router = Router();

const ordersController = new OrdersController();

router.get('/', ordersController.getAllWithId);

router.post(
  '/',
  verifyToken.verifyAuthToken,
  orderValidate,
  ordersController.create,
);

export default router;
