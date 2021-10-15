const models = require('../models');

const getAccountByNumber = async (account_number) => {
  const account = await models.Accounts.findOne({
    where: {
      account_number: parseInt(account_number),
    },
  });

  if (!account) {
    throw new Error('Not Found!');
  }

  const accountMap = {
    account_number: account.account_number,
    client_id: account.client_id,
    is_active: account.is_active,
  };

  return accountMap;
};

const createAccount = async (account) => {
  const newAccount = models.Accounts.create(account);
  return newAccount;
};

module.exports = {
  getAccountByNumber,
  createAccount,
};
