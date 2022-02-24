require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/',
      accounts: ['db92e0f63c4fbe6f88dea9c2b08f3f8cf0540d72a36a000000000000'],
    },
  },
};
