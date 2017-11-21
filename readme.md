# Dapp Seed Built with Next and Truffle

## Machine Requirements

You need decent memory (at least 4GB to spare), an SSD (without was taking AGES), fast internet.

I used Linode in the end.

## Setup

  - Version 8.1.2+ node. (NVM)
  - `npm install`
  - `npm install -g truffle`
  - Install [MetaMask](https://metamask.io/) for interacting with you're dapp in Chrome
  - Install Docker

## Development

To run the site at localhost:3000 in development mode:
  - `npm run dev`

To run a test network at localhost:9545 for deploying and migrating contracts to:
  - Run network: `truffle develop`
  - Compile contracts: `compile`
  - Migrate contracts: `migrate` (add `--reset` flag after initial migration)
  - Run tests: `test`

  - Note: When compiling, if you get a message saying something like `Incorrect number of arguments to Solidity function`, deleting your build folder and recompiling may fix it. (Seems to be a bug).

To set up MetaMask:
  - Choose `restore from seed phrase` on launching.
  - Enter mnemonic given after running `truffle develop` (Something like `candy maple cake sugar etc.`).
  - Enter password.

## Deployment (WIP)

To deploy the site:
  - npm run deploy:ci:dev
  - npm run deploy:ci:prod

Running the node:
`docker run -p 8545:8545 -p 30303:30303 -d -v /root/.ethereum:/root/.ethereum --restart always ethereum/client-go --syncmode=fast --cache 4096 --rpc`

Attach to the node
`docker run -it -v /root/.ethereum/:/root/.ethereum/ ethereum/client-go attach`

Running Node without docker:

Run the node

`geth --rpc`

Attach to node

`geth console`

## Overview of how long it takes
https://github.com/ethereum/go-ethereum/issues/14647#issuecomment-335325502

To deploy the contract to the live network:
- Client must be completely synced with the live network.
- Client is hosting an rpc server: `geth rpc 8545`.
- Client has one account registered and can sign for that account:
  - Linux keystore: `~/.ethereum/keystore/`.
- To check coinbase balance in geth JS console: `web3.fromWei(eth.getBalance(ACCOUNT_ADDRESS), "ether");`.
- Unlock account in geth JS acount: `personal.unlockAccount(address, "password");`.
- Set default account: `eth.defaultAccount=eth.coinbase;`.
- To migrate: `truffle migrate --network live`

To interact with contract:
- Create Javascript object for account: `var contract = eth.contract(ABI, CONTRACT_ADDRESS)`
- ABI for contract can be attained using the [online compiler](https://remix.ethereum.org/)
  - details/interface-ABI => copy to clipboard



