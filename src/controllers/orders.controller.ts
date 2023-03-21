import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import OrdersService from '../services/orders.service';
import UsersService from '../services/users.service';

export default class OrdersController {
  constructor(
    private ordersService = new OrdersService(),
    private userService = new UsersService(),
  ) { }

  public getAllWithId = async (_req: Request, res: Response) => {
    const ordersWithId = await this.ordersService.getAllWithId();
    res.status(statusCodes.OK).json(ordersWithId);
  };

  public create = async (req: Request, res: Response) => {
    try {
      const { data: { username }, productsIds } = req.body;
      const userId = await this.userService.findId(username);
    
      await this.ordersService.create(userId, productsIds);
      res.status(statusCodes.CREATED).json({ userId, productsIds });
    } catch (error) {
      console.log(error);
      res.status(statusCodes.ERROR).json(error);
    }
  };
}