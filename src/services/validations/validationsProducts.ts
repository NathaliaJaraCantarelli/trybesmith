import Product from '../../interfaces/product.interface';
import schemas from './schemas';

const validateProduct = (productDetails: Product) => schemas
  .product.validate(productDetails);

export default { validateProduct };
