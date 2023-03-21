import OrderWithId from '../interfaces/orderWithId.interface';
import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import ProductModel from '../models/products.model';

export default class OrdersService {
  public model: OrdersModel;

  public publicModel: ProductModel;

  constructor() {
    this.model = new OrdersModel(connection);
    this.publicModel = new ProductModel(connection);
  }

  public async getAllWithId(): Promise<OrderWithId[]> {
    const orders = await this.model.getAllWithId();
    return orders;
  }

  public async create(userId: number, productsIds: number[]) {
    const orderId = await this.model.create(userId);
    Promise.all(productsIds.map((productId) => this.publicModel.insertOrder(orderId, productId)));
  }
}