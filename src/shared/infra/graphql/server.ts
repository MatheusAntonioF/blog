/* eslint-disable no-console */
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';

import '../typeorm/connection';

import UserResolver from '@modules/users/infra/graphql/resolvers/UserResolver';

async function startServer() {
  const schema = await buildSchema({ resolvers: [UserResolver] });

  const server = new ApolloServer({ schema });

  server
    .listen()
    .then(({ url }) => console.log(`🔥 - Server started on ${url}`));
}

startServer();
