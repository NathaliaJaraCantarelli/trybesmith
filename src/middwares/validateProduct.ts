import { Request, Response, NextFunction } from 'express';
import validationsProducts from '../services/validations/validationsProducts';
import statusCodes from '../statusCodes';

const productValidate = async (req: Request, res: Response, next: NextFunction) => {
  const product = req.body;
  const { error } = validationsProducts.validateProduct(product);
  if (error) {
    if (error.message.includes('is required')) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: error.message });
    }
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({ message: error.message });
  }
  next();
};

export default productValidate;
