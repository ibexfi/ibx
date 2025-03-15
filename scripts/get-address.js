require('dotenv').config();
const { ethers } = require('ethers');

async function main() {
  // Récupérer la clé privée depuis le fichier .env
  const privateKey = process.env.PRIVATE_KEY;
  
  // Créer un wallet à partir de la clé privée
  const wallet = new ethers.Wallet(privateKey);
  
  // Afficher l'adresse
  console.log('Adresse du wallet:', wallet.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
