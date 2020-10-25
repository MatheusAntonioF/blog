import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import User from '../infra/typeorm/entities/User';

@injectable()
class ListUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute(): Promise<User[]> {
    const allUsers = await this.usersRepository.listUsers();

    return allUsers;
  }
}

export default ListUsersService;
