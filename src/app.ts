import express from 'express';
import productsRouter from './routes/products.routes';
import usersRouter from './routes/users.routes';
import ordersRouter from './routes/orders.routes';
import loginRouter from './routes/login.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

app.use('/users', usersRouter);

app.use('/login', loginRouter);

app.use('/orders', ordersRouter);

export default app;
