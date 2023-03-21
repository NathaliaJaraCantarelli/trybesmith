import { Pool } from 'mysql2/promise';
import OrderWithId from '../interfaces/orderWithId.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllWithId(): Promise<OrderWithId[]> {
    const result = await this.connection.execute(
      `SELECT o.id, o.user_id AS userId,
      JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders AS o
      INNER JOIN Trybesmith.products AS p
      ON o.id = p.order_id
      GROUP BY o.id`,
    );
    const [rows] = result;
    return rows as OrderWithId[];
  }
}