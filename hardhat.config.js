require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/g16FCEzEJMQy7kgOIBwXMNFUqtqkG1vI',
      accounts: ['db92e0f63c4fbe6f88dea9c2b08f3f8cf0540d72a36a07c96e0632bbebcb0a76'],
    },
  },
};
