require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks:{
    hardhat: {
      chainId: 1337
    },
    ropsten:{
      url: "https://ropsten.infura.io/v3/e9e1d46080c944e896558bc26804ccc4",
      accounts: ['b96b74c0eb278bb636f4230d58796088a90f931f42842a3776d563b9d60dafa4']
    }
  }
};
