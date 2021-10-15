const mocks = require('../mocks');
const accountService = require('../services/account.service');

const get = async (req, res) => {
  try {
    const account = await accountService.getAccountByNumber(req.params.id);
    res.status(200).json(account);
  } catch (err) {
    res.status(404).json({
      message: `Não foi encontrada uma conta com este número: ${req.params.id}`,
      error: err.toString(),
    });
  }
};

const create = async (req, res) => {
  try {
    const account = {
      account_number: req.body.account_number,
      client_id: req.body.client_id,
      is_active: true,
    };

    const newAccount = await accountService.createAccount(account);
    res.status(200).json(newAccount);
  } catch (err) {
    res.status(500).json({
      message: 'Não foi possível criar uma nova conta!',
      error: err.toString(),
    });
  }
};

const update = async (req, res) => {
  try {
    const updatedAccount = await accountService.updateAccount(req.body);
    res.status(200).json(updatedAccount);
  } catch (err) {
    res.status(500).json({
      message: 'Não foi possível alterar esta conta!',
      error: err.toString(),
    });
  }
};

module.exports = {
  get,
  create,
  update,
};
