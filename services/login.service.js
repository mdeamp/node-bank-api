const jwt = require('jsonwebtoken');

const authenticateUser = async (username, password) => {
  if (username === 'admin' && password === 'admin') {
    return {
      token: jwt.sign(username, 'SECRET'),
    };
  } else {
    return {
      token: null,
    };
  }
};
module.exports = {
  authenticateUser,
};
