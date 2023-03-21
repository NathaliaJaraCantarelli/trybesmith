import { Request, Response, NextFunction } from 'express';
import validationsUser from '../services/validations/validationsUser';
import statusCodes from '../statusCodes';

const userValidate = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  const { error } = validationsUser.validateUser(user);
  if (error) {
    if (error.message.includes('is required')) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: error.message });
    }
    return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({ message: error.message });
  }
  next();
};

export default userValidate;
