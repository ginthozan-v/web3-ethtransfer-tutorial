// https://eth-ropsten.alchemyapi.io/v2/MvOPphHa8sz6sCCRGIJCuZA7kLQ0j8oY

require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/MvOPphHa8sz6sCCRGIJCuZA7kLQ0j8oY",
      accounts: ['8b8d2717e0a220e67b099dda4a148dcca01e0f74da957702f3d39974b58c8937']
    },
  },
};
