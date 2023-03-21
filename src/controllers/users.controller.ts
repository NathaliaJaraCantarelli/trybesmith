import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import UsersService from '../services/users.service';
import authToken from '../auth/authToken';

export default class UserController {
  constructor(private userService = new UsersService()) { }
  
  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const userCreated = await this.userService.create(user);
    if (userCreated) {
      const { username, password } = user;
      const token = authToken.generateToken({ username, password });
      return res.status(statusCodes.CREATED).json({ token });
    }
    return res.status(statusCodes.ERROR).json('Erro ao criar usuário');
  };
}