const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const { typeDefs, resolvers } = require('./path-to-your-schemas');

// Load environment variables from a .env file if necessary
// require('dotenv').config();

const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bookstoredb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Create an ApolloServer instance with type definitions and resolvers
const jwt = require('jsonwebtoken');
const { User } = require('./path-to-your-mongoose-models');

const context = async ({ req }) => {
  // Get the authorization header from the request
  const token = req.headers.authorization || '';

  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, 'your-secret-key'); // replace with your actual secret key

    // Check if the user exists in the database
    const user = await User.findById(decoded.id);

    // Attach the user to the context
    return { user };
  } catch (err) {
    // If there's an error (e.g., token is invalid), just return an empty user
    return { user: null };
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});


// Apply ApolloServer middleware to Express app
server.applyMiddleware({ app });

// Define the port for the server
const PORT = process.env.PORT || 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`);
});
