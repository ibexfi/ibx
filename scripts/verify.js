require('dotenv').config();
const hre = require("hardhat");

async function main() {
  const contractAddress = "0xd3a33c5D350a377f0779Fb241D9807c0244eB076";
  
  console.log("Vérification du contrat sur Gnosis Scan...");
  console.log(`Adresse du contrat: ${contractAddress}`);
  
  try {
    // Tenter de vérifier le contrat
    await hre.run("verify:verify", {
      address: contractAddress,
      constructorArguments: [],
    });
    
    console.log("Contrat vérifié avec succès!");
    console.log(`Vous pouvez voir votre contrat vérifié ici: https://gnosisscan.io/address/${contractAddress}#code`);
  } catch (error) {
    console.error("Erreur lors de la vérification:", error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
