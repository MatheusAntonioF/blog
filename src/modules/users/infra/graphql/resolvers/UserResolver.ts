import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import ICreateUser from '@modules/users/dtos/ICreateUser';

import CreateUserService from '@modules/users/services/CreateUserService';

import User from '../../typeorm/entities/User';

@Resolver()
class UserResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello World';
  }

  @Mutation(() => User)
  async createUser(@Arg('data') data: ICreateUser): Promise<User> {
    const createdUser = new CreateUserService().execute(data);

    return createdUser;
  }
}

export default UserResolver;
