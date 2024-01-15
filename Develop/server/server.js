const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const db = require('./config/connection');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Create an ApolloServer instance with your type definitions and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Apply ApolloServer to Express as middleware
server.applyMiddleware({ app });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    console.log(`🚀 Apollo Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
