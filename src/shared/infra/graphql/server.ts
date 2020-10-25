/* eslint-disable no-console */
import 'reflect-metadata';

import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';

import UserResolver from '@modules/users/infra/graphql/resolvers/UserResolver';

import '@shared/infra/typeorm';
import '@shared/container';

async function startServer() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    validate: false,
  });

  const server = new ApolloServer({ schema });

  server
    .listen()
    .then(({ url }) => console.log(`🔥 - Server started on ${url}`));
}

startServer();
