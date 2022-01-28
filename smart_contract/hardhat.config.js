require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/NQztbNgibPABVVbA9XkqOwsHqbqEp9Pr",
      accounts: [
        "9ebffec8b1e2be3f5895eb082624c04a411113520e9200a8469a1142d4b591cb",
      ],
    },
  },
};
