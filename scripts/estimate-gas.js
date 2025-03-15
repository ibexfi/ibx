require('dotenv').config();
const hre = require("hardhat");
const { ethers } = require("hardhat");

async function main() {
  try {
    // Obtenir le prix du gaz actuel
    const gasPrice = await ethers.provider.getGasPrice();
    console.log(`Prix du gaz actuel: ${ethers.utils.formatUnits(gasPrice, "gwei")} gwei`);
    
    // Obtenir le factory du contrat
    const IBXToken = await ethers.getContractFactory("ERC20IBX");
    
    // Estimer le gaz nécessaire pour le déploiement
    console.log("Estimation du gaz pour le déploiement...");
    const deploymentGasEstimate = await ethers.provider.estimateGas(
      IBXToken.getDeployTransaction().data
    );
    
    console.log(`Gaz estimé pour le déploiement: ${deploymentGasEstimate.toString()} unités`);
    
    // Calculer le coût total en xDAI
    const deploymentCost = deploymentGasEstimate.mul(gasPrice);
    console.log(`Coût estimé du déploiement: ${ethers.utils.formatEther(deploymentCost)} xDAI`);
    
    // Vérifier le solde du compte
    const signer = await ethers.provider.getSigner();
    const address = await signer.getAddress();
    const balance = await ethers.provider.getBalance(address);
    
    console.log(`Adresse du wallet: ${address}`);
    console.log(`Solde actuel: ${ethers.utils.formatEther(balance)} xDAI`);
    
    if (balance.lt(deploymentCost)) {
      console.log(`Vous avez besoin d'au moins ${ethers.utils.formatEther(deploymentCost)} xDAI pour déployer le contrat.`);
      console.log(`Il vous manque ${ethers.utils.formatEther(deploymentCost.sub(balance))} xDAI.`);
    } else {
      console.log(`Vous avez suffisamment de fonds pour déployer le contrat.`);
    }
  } catch (error) {
    console.error("Erreur lors de l'estimation du gaz:", error);
    
    // Si l'erreur est due à un solde insuffisant, essayons d'obtenir une estimation approximative
    console.log("\nTentative d'estimation approximative...");
    try {
      // Valeurs moyennes basées sur des déploiements similaires
      const averageGasUsed = 2000000; // Estimation moyenne pour un contrat ERC20
      const gasPrice = await ethers.provider.getGasPrice();
      const approximateCost = ethers.BigNumber.from(averageGasUsed).mul(gasPrice);
      
      console.log(`Coût approximatif du déploiement: ${ethers.utils.formatEther(approximateCost)} xDAI`);
      console.log("Note: Cette estimation est approximative et peut varier.");
    } catch (err) {
      console.error("Impossible de fournir une estimation approximative:", err);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
