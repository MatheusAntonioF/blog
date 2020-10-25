import CreateUserDTO from '../dtos/ICreateUser';
import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
  createUser(data: CreateUserDTO): Promise<User>;
  showUser(id: string): Promise<User | undefined>;
}
