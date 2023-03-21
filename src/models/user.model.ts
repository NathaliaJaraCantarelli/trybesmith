import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';
import Login from '../interfaces/login.interface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { username, vocation, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

  public async vefiryLogin(login: Login): Promise<Login> {
    const { username, password } = login;
    const result = await this.connection.execute<ResultSetHeader>(
      'SELECT id FROM Trybesmith.users WHERE username = ? AND password = ?',
      [username, password],
    );
    const [id] = result;
    
    if (Object.keys(id).length > 0) return { username, password };
    return { username: '', password: '' };
  }
}
