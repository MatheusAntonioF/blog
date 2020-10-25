import { injectable, inject } from 'tsyringe';

import IUsersRepository from '../repositories/IUsersRepository';
import User from '../infra/typeorm/entities/User';

@injectable()
class ShowUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute(id: string): Promise<User | undefined> {
    const findedUser = await this.usersRepository.showUser(id);

    return findedUser;
  }
}

export default ShowUserService;
