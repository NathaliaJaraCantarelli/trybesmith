import { Router } from 'express';
import UserController from '../controllers/users.controller';
import LoginMiddware from '../middwares/Login.middware';

const router = Router();

const usersController = new UserController();

router.post('/', LoginMiddware, usersController.verifyLogin);

export default router;
