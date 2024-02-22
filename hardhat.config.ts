/* // import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import './'
require("dotenv").config({ path: ".env" });

const ALCHEMY_MAINNET_API_KEY_URL = process.env.ALCHEMY_MAINNET_API_KEY_URL;

const ALCHEMY_SEPOLIA_API_KEY_URL = process.env.ALCHEMY_SEPOLIA_API_KEY_URL;

const ALCHEMY_MUMBAI_API_KEY_URL = process.env.ALCHEMY_MUMBAI_API_KEY_URL;

const ACCOUNT_PRIVATE_KEY = process.env.ACCOUNT_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      forking: {
        url: ALCHEMY_MAINNET_API_KEY_URL,
      }
    },
    sepolia: {
      url: ALCHEMY_SEPOLIA_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    mumbai: {
      url: ALCHEMY_MUMBAI_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    }
  },
  lockGasLimit: 200000000000,
  gasPrice: 10000000000,
}; */



import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const URL = "https://eth-sepolia.g.alchemy.com/v2/IrKacA794mfjNeuRwjIHcDdlrcJBiekz";
const KEY = "8fd68b2aa1e7719bf2f5bfb9ea7004314b594b0b558e3c7327b0f3ba604a11fe" ;
const ALCHEMY_MAINNET_API_KEY_URL = "https://eth-mainnet.g.alchemy.com/v2/IrKacA794mfjNeuRwjIHcDdlrcJBiekz"




const config: HardhatUserConfig = {
  solidity: "0.8.24",

  networks: {
  
    hardhat: {
      forking: {
        url: ALCHEMY_MAINNET_API_KEY_URL,
        blockNumber: 14390000
      }
      },
    sepolia:{
      url: URL,
      accounts:[`0x${KEY}`],
    },
  },
};

export default config;
