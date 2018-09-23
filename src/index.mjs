import Apollo, * as ApolloExports from 'apollo-server';
import dotenv from 'dotenv';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import Config from './config';

const apollo = Apollo || ApolloExports;

dotenv.config();
const { PORT } = process.env;
const config = new Config();

const server = new apollo.ApolloServer({
  typeDefs,
  resolvers,
  playground: !config.production,
  formatError: (error) => {
    /* istanbul ignore next */
    console.log(error);
  },
});

if (!config.test) {
  server.listen({ port: PORT }).then(({ url }) => {
    /* istanbul ignore next */
    console.log(`🚀 Server ready at ${url}`);
  });
};

export default server;