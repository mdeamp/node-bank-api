const accountsMock = require('../mocks/accounts');

const getById = (req, res) => {
  const account = accountsMock.find(
    (acc) => acc.account_number === req.params.id
  );

  if (!account) {
    res.status(404).json({
      message: `Não foi encontrada uma conta com este número: ${req.params.id}`,
    });
  }

  res.status(200).json(account);
};

module.exports = {
  getById,
};
