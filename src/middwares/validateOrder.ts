import { Request, Response, NextFunction } from 'express';
import validationsOrders from '../services/validations/validationsOrders';
import statusCodes from '../statusCodes';

const orderValidate = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  const { error } = validationsOrders.validateOrder(productsIds);
  
  if (error) {
    if (error.message.includes('is required')) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: error.message });
    }
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({ message: error.message });
  }
  next();
};

export default orderValidate;
