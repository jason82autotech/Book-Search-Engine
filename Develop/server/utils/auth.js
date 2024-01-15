const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

const { AuthenticationError } = require('apollo-server-express');

const authMiddleware = (context) => {
  // allows token to be sent via context.req.headers.authorization
  let token = context.req.headers.authorization;

  if (!token) {
    throw new AuthenticationError('You have no token!');
  }

  try {
    // verify token and get user data out of it
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    context.user = data;
  } catch (err) {
    console.error('Invalid token');
    throw new AuthenticationError('Invalid token!');
  }
};

module.exports = authMiddleware;
