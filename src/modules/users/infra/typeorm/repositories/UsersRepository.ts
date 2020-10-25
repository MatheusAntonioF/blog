import { Repository, getRepository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import CreateUserDTO from '@modules/users/dtos/ICreateUser';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async listUsers(): Promise<User[]> {
    const allUsers = await this.ormRepository.find();

    return allUsers;
  }

  public async showUser(id: string): Promise<User | undefined> {
    const findedUser = await this.ormRepository.findOne({ where: { id } });

    return findedUser;
  }

  public async createUser(data: CreateUserDTO): Promise<User> {
    const createdUser = this.ormRepository.create(data);

    await this.ormRepository.save(createdUser);

    return createdUser;
  }
}

export default UsersRepository;
