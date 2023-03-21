import Order from '../../interfaces/orderWithId.interface';
import schemas from './schemas';

const validateOrder = (productsIds: Order) => schemas.order.validate({ productsIds });

export default { validateOrder };
