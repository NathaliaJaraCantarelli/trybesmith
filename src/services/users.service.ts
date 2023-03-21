import User from '../interfaces/user.interface';
import connection from '../models/connection';
import UsersModel from '../models/user.model';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(user: User): Promise<User> {
    return this.model.create(user);
  }
}