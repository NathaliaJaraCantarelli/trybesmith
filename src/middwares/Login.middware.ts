import { Request, Response, NextFunction } from 'express';
import statusCodes from '../statusCodes';

const property = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { username, password } = req.body;

  if (!username) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"username" is required' });
  }

  if (!password) {
    return res.status(statusCodes.BAD_REQUEST).json({ message: '"password" is required' });
  }
  next();
};

export default property;