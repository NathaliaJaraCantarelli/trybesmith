import OrderWithId from '../interfaces/orderWithId.interface';
import connection from '../models/connection';
import OrdersModel from '../models/orders.model';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAllWithId(): Promise<OrderWithId[]> {
    const orders = await this.model.getAllWithId();
    return orders;
  }
}