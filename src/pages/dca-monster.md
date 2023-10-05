---
title: DCA.Monster
description:
  A novel AMM leveraging ERC20 streams for granular, efficient on-chain DCA.
logo: 'H0Da4Np.png'
thumbnail: 'H0y6JCx.png'
gallery:
  - image: '1.png'
  - image: '2.png'
  - image: '3.png'
  - image: '4.png'
  - image: '5.png'
  - image: '6.png'
tags:
  event: ETHGlobal Paris
  winner: 1st Place
  projectStage: Hackathon Project
  technology:
    - Python
    - NextJS
    - TailwindCSS
links:
  website:
    - 'https://ethglobal.com/showcase/dca-monster-b8157'
  github:
    - 'https://github.com/md0x/dca.monster'
  demo: https://dca-monster.vercel.app/
team:
  - name: Salvador Pablo Maldonado Turci
    discord: 'mangolassi#0'
    twitter: 'https://twitter.com/pmturci'
---

## About DCA Monster

While on-chain DCA solutions do exist, they are uncommon and frequently
accompanied by an array of difficulties. DCA.Monster was created to address
these issues by developing a new AMM based on Uniswap V2 that seamlessly
combines with Streamable tokens and runs a Cartesi Rollup.

### Current on-chain DCA solutions suffer from:

- Dependence on third-party bots or keepers to execute transactions
- Capital inefficiency as it remains locked in smart contracts between
  transactions
- Inability to integrate with DEXs
- Gas inefficiency
- Lack of granularity in price range
- Lack of flexibility in time range

DCA.Monster AMM merges with ERC20 streams to efficiently and with infinite
granularity, implement DCA on-chain. It optimizes capital and gas usage,
integrates with DEXs, and provides both granular pricing and flexible timing.

Without [Cartesi Rollups](https://docs.cartesi.io/cartesi-rollups/), such an
implementation would be computationally expensive due to the complex
calculations required for AMM streams recalculations. However, Cartesi Rollups
enables us to perform these computations off-chain on any device, with the
results verified on-chain.

## How it's Made

Our implementation consists of both a frontend and a DApp/backend:

### DApp/backend

- AMM based on Uniswap V2 written in Python combined with Streamable tokens also
  written in Python that combine seamlessly with the AMM to create a DCA
  experience.
- Built upon the
  [Cartesi dapp rollups-examples custom dapp starter](https://github.com/cartesi/rollups-examples/tree/main/custom-dapps)
- Uses RISC-V base Docker images to install Python dependencies
- Ready for "prod" mode operation

### Frontend

Utilizes the template-web3-app from TurboETH that incorporates:

- Rainbow kit for wallet connection: Metamask, WalletConnect, Portis, Torus,
  Authereum, Fortmatic, and Squarelink
- Next JS for frontend framework
- Tailwind CSS for styling
- Web3 React for Ethereum JavaScript API
- Wagmi and RainbowKit for additional functionality
- background image
