import { injectable, inject } from 'tsyringe';

import User from '../infra/typeorm/entities/User';
import ICreateUser from '../dtos/ICreateUser';
import IUsersRepository from '../repositories/IUsersRepository';

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ name, email, password }: ICreateUser): Promise<User> {
    const user = await this.usersRepository.createUser({
      name,
      email,
      password,
    });

    return user;
  }
}

export default CreateUserService;
