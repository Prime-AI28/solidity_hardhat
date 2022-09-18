const { task } = require('hardhat/config')
const nomiclabsPlugin = require('solidity-coverage')

require('@nomicfoundation/hardhat-toolbox')
require('dotenv').config()
require('@nomiclabs/hardhat-etherscan')
//require('@nomiclabs/hardhat-waffle')
require('./tasks/block-number')
require("hardhat-gas-reporter")

/** @type import('hardhat/config').HardhatUserConfig */

const Goerli_RPC = process.env.Goerli_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const API_KEY = process.env.ETHERSCAN_API_KEY
module.exports = {
    defaultNetwork: 'hardhat',
    networks: {
        Goerli: {
            url: Goerli_RPC,
            accounts: [PRIVATE_KEY],
            chainId: 5,
        },
        localhost: {
            url: 'http://127.0.0.1:8545/',
            chainId: 31337,
        },
    },
    solidity: '0.8.9',
    etherscan: {
        apiKey: API_KEY,
    },
    gasReporter: {
      enabled: true,
      outputFile: 'gas-report.txt',
      noColors: true,
      currency: 'USD',
      coinmarketcap: 'process.env.COIN_API_KEY',
    }
}
