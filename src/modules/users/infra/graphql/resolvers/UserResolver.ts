import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import { container } from 'tsyringe';

import ICreateUser from '@modules/users/dtos/ICreateUser';
import CreateUserService from '@modules/users/services/CreateUsersService';
import ShowUserService from '@modules/users/services/ShowUserService';
import ListUsersService from '@modules/users/services/ListUsersService';

import User from '../../typeorm/entities/User';

@Resolver()
class UserResolver {
  @Query(() => [User])
  async listUsers(): Promise<User[]> {
    const listUsersService = container.resolve(ListUsersService);

    const allUsers = await listUsersService.execute();

    return allUsers;
  }

  @Query(() => User)
  async showUser(@Arg('id') id: string): Promise<User | undefined> {
    const showUserService = container.resolve(ShowUserService);

    const findedUser = await showUserService.execute(id);

    return findedUser;
  }

  @Mutation(() => User)
  async createUser(@Arg('data') data: ICreateUser): Promise<User> {
    const createUserService = container.resolve(CreateUserService);

    const createdUser = await createUserService.execute(data);

    return createdUser;
  }
}

export default UserResolver;
