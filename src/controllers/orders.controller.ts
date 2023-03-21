import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public getAllWithId = async (req: Request, res: Response) => {
    const ordersWithId = await this.ordersService.getAllWithId();
    res.status(statusCodes.OK).json(ordersWithId);
  };
}