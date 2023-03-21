import { Router } from 'express';
import UserController from '../controllers/users.controller';
import userValidate from '../middwares/validateUser';

const router = Router();

const usersController = new UserController();

router.post('/', userValidate, usersController.create);

export default router;
