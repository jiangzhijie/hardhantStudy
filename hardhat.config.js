require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    bsctest:{
      //url:"http://18.180.227.173:8545/",
      url:"https://data-seed-prebsc-1-s3.binance.org:8545/",
      //url:"http://127.0.0.1:8545/",
      //url:"https://misty-smart-patina.bsc.discover.quiknode.pro/d6e19f0b601dd6955adb0156257edf4a4bddc7a8/",
      //test 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 
      //主网部署地址5bd61a2666887855063b51a4576bccd521eba5b9bcb8fe973a479eb3d5be95b8
      //BSC测试网部署地址 
      accounts:["92a91146c5a6302e734d564c4a67cddb428d3ba4c6a903341bfcc968efd07702"]//9676a0d40704c049aad450c272f2e474f52fc879195dd5aae330f23da5848c32
    },
  },
  etherscan: {
    // npx hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
    apiKey: {
      bscTestnet: "8HNM61KWUA8GGR3WJ67A5D9S3HAKQ6RBEV",
    },
  },
};
