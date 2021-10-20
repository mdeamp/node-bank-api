const jwt = require('jsonwebtoken');

const authorize = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).json({
      message: 'Não autorizado',
    });
  }

  jwt.verify(req.headers.authorization, 'SECRET', (err, decoded) => {
    console.log('erro:', err);
    console.log('decoded:', decoded);

    if (err) {
      res.status(401).json({
        message: 'Não autorizado',
      });
    } else {
      next();
    }
  });
};

module.exports = {
  authorize,
};
