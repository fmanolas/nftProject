require("@nomicfoundation/hardhat-toolbox");

const fs= require("fs");
let mnemonic=fs.readFileSync(".secret").toString().trim();
let alchemyId=fs.readFileSync('.alchemy').toString().trim();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks:{
    sepolia:{
      url: "https://eth-sepolia.g.alchemy.com/v2/" +alchemyId,
      accounts:{
        mnemonic,
        path: "m/44'/60'/0'/0",
        initialIndex:0,
        count:10
      }
    }
  },
  etherscan:{
    apiKey: fs.readFileSync(".etherscan").toString().trim()
  },
  solidity: "0.8.16",
};
