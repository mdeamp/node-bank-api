const loginService = require('../services/login.service');

const login = async (req, res) => {
  try {
    const jwt = await loginService.authenticateUser(
      req.body.username,
      req.body.password
    );
    if (!jwt) {
      throw 'Forbidden';
    }
    res.status(200).json(jwt);
  } catch (err) {
    res.status(403).json({
      message: 'Usuário incorreto ou senha incorreta!',
      error: err.toString(),
    });
  }
};

module.exports = {
  login,
};
