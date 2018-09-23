import Apollo from 'apollo-server';
import dotenv from 'dotenv';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

dotenv.config();
const { PORT, NODE_ENV } = process.env;

let production = false;
if (NODE_ENV === 'production') {
  production = true;
}

const server = new Apollo.ApolloServer({
  typeDefs,
  resolvers,
  playground: !production,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
