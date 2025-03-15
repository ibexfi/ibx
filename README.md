# IBX Token

Ce projet contient le smart contract du token IBX et les scripts nécessaires pour le déployer sur la Gnosis Chain.

## Prérequis

- Node.js (v14 ou supérieur)
- npm ou yarn
- Un wallet avec des fonds sur la Gnosis Chain pour payer les frais de déploiement

## Installation

1. Clonez ce dépôt
2. Installez les dépendances :

```bash
npm install
# ou
yarn install
```

3. Créez un fichier `.env` à partir du fichier `.env.example` et ajoutez votre clé privée :

```bash
cp .env.example .env
```

Puis éditez le fichier `.env` pour ajouter votre clé privée (sans le préfixe 0x).

## Compilation du contrat

Pour compiler le contrat, exécutez :

```bash
npm run compile
# ou
yarn compile
```

## Déploiement sur la Gnosis Chain

Pour déployer le contrat sur la Gnosis Chain, assurez-vous d'avoir configuré votre fichier `.env` avec une clé privée valide qui possède des fonds sur la Gnosis Chain, puis exécutez :

```bash
npm run deploy:gnosis
# ou
yarn deploy:gnosis
```

Le script affichera l'adresse du contrat déployé, l'adresse du propriétaire et l'approvisionnement total du token.

## Structure du projet

- `contracts/IBXToken.sol` : Le smart contract du token IBX (standard ERC20)
- `hardhat.config.js` : Configuration de Hardhat pour la compilation et le déploiement
- `scripts/deploy.js` : Script de déploiement du token
- `.env.example` : Exemple de fichier de configuration des variables d'environnement

## Informations sur le token

- Nom : IBX
- Symbole : IBX
- Décimales : 18
- Approvisionnement total : 49,475,801.901629 IBX
- Adresse du contrat sur Gnosis Chain : [0xd3a33c5D350a377f0779Fb241D9807c0244eB076](https://gnosisscan.io/address/0xd3a33c5D350a377f0779Fb241D9807c0244eB076)
