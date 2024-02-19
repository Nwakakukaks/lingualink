require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-avalanche");

const privateKey =  "2681881ef2ddd24cd569a5e5df1f34ac3f765f37ad7cffce76a9a7ee3c1fe7b8"; // Replace with your actual private key

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.19",
  networks: {
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc", // Avalanche Fuji C-Chain RPC endpoint
      chainId: 43113, // Avalanche Fuji C-Chain Chain ID
      gas: "auto",
      gasPrice: 470000000000, // Adjust the gas price according to the network
      accounts: [privateKey], // Use the private key for deployment
    },
  },
};
