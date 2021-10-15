const mocks = require('../mocks');
const { getAccountByNumber } = require('../services/account.service');

const get = async (req, res) => {
  try {
    const account = await getAccountByNumber(req.params.id);
    res.status(200).json(account);
  } catch (err) {
    res.status(404).json({
      message: `Não foi encontrada uma conta com este número: ${req.params.id}`,
      error: err.toString(),
    });
  }
};

const getBalanceById = (req, res) => {
  const account = mocks.accountsBalance.find(
    (acc) => acc.account_number === req.params.id
  );

  if (!account) {
    res.status(404).json({
      message: `Não foi encontrada uma conta com este número: ${req.params.id}`,
    });
  }

  res.status(200).json(account);
};

const getClientById = (req, res) => {
  const account = mocks.accountsClient.find(
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
  get,
  getBalanceById,
  getClientById,
};
