import { getRepository } from 'typeorm';

import User from '../infra/typeorm/entities/User';
import ICreateUser from '../dtos/ICreateUser';

class CreateUserService {
  public async execute({ name, email, password }: ICreateUser): Promise<User> {
    const usersRepository = getRepository(User);

    const user = usersRepository.create({ name, email, password });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
