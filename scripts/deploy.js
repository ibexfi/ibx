// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const IBXToken = await hre.ethers.getContractFactory("ERC20IBX");
  console.log("Deploying IBX Token...");
  
  // Deploy the contract
  const ibxToken = await IBXToken.deploy();
  await ibxToken.deployed();

  console.log("IBX Token deployed to:", ibxToken.address);
  console.log("Token Owner:", await ibxToken.getOwner());
  console.log("Total Supply:", (await ibxToken.totalSupply()).toString());
  
  // Afficher des informations supplémentaires sur le token
  console.log("Token Name:", await ibxToken.name());
  console.log("Token Symbol:", await ibxToken.symbol());
  console.log("Token Decimals:", await ibxToken.decimals());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
