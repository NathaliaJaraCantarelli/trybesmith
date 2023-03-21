import Login from '../interfaces/login.interface';
import User from '../interfaces/user.interface';
import connection from '../models/connection';
import UsersModel from '../models/user.model';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async verifyLogin(login: Login): Promise<Login> {
    return this.model.vefiryLogin(login);
  }

  public async create(user: User): Promise<User> {
    return this.model.create(user);
  }

  public async findId(user: string): Promise<number> {
    return this.model.findId(user);
  }
}