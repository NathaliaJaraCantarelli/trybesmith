import Product from '../interfaces/product.interface';
import connection from '../models/connection';
import ProductModel from '../models/products.model';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create(product: Product): Promise<Product> {
    console.log(this.model.create(product));
    
    return this.model.create(product);
  }
}