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

const updateAccount = async (account) => {
  const updatedAccount = await models.Accounts.update(account, {
    where: {
      account_number: account.account_number,
    },
  });

  if (updatedAccount[0] > 0) {
    return {
      ...account,
      message: 'Account updated successfully!',
    };
  } else {
    throw new Error('Not Found or Updated!');
  }
};

const removeAccount = async (account_number) => {
  const removedAccount = await models.Accounts.destroy({
    where: {
      account_number: parseInt(account_number),
    },
  });

  if (removedAccount > 0) {
    return {
      account_number,
      message: 'Account removed successfully!',
    };
  } else {
    throw new Error('Not Found or Removed!');
  }
};

module.exports = {
  getAccountByNumber,
  createAccount,
  updateAccount,
  removeAccount,
};
