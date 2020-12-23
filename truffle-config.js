const path = require("path");
const Web3 = require("web3");
const web3 = new Web3();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const getEnv = env => {
  const value = process.env[env];
  if (typeof value === 'undefined') {
    throw new Error(`${env} has not been set.`);
  }
  return value;
};

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      network_id: 1,
      port: 8545,
      host: "127.0.0.1"
    },
    main: {
      gasPrice: web3.utils.toWei('46', 'gwei'),
      gas: 3999246,
      network_id: 1,
      provider: function() {
        return new HDWalletProvider(
          getEnv('WALLET_MAINNET'), 
          "https://mainnet.infura.io/v3/253ee0e1efea46419ff33ef9f4ce2998"
        )
      },
    }
  },
  compilers: {
    solc: {
      version: "0.6.5"
    }
  },
  mocha: {
    enableTimeouts: false,
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: '3HISFDN1CTUU7JW7BWBUFW5QX8GPA6N8HY'
  }
};
