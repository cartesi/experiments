---
title: HedgeHog Protocol
description:
  A DeFi protocol that hedges against the inherent impermanent loss of Uniswap
  liquidity pools using NFTs.
foundedOn: 2023-10-20
logo: 'H0Da4Np.png'
thumbnail: 'H0y6JCx.png'
gallery:
  - image: 'projects_ku1pt_images_Screenshot_2023-07-23_0.png'
  - image: 'projects_ku1pt_images_Screenshot_2023-07-23_1.png'
  - image: 'projects_ku1pt_images_Screenshot_2023-07-23_2.png'
  - image: 'projects_ku1pt_images_Screenshot_2023-07-23_3.png'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - DeFi
  languages:
    - Python
  stacks_and_libraries:
    - Wallet Connect
    - Chainlink
    - web3.storage
    - Polygon
links:
  website: 'https://ethglobal.com/showcase/hedgehog-protocol-ku1pt'
  github:
    - 'https://github.com/LucasMartinCalderon/Hedgehog'
team:
  - name: Tony Lu
    discord: 'tonyl012#0'
  - name: Kenneth Wu
    discord: 'lianshangk#0'
    twitter: 'https://twitter.com/KernelKennethG'
  - name: Lucas Martin Calderon
    discord: 'Lucas Martin Calderon#4176'
    twitter: 'https://twitter.com/lmc_security'
related:
  - nucleus
  - cobe
  - bidsquad
---

## What is this?

HedgeHog is a DeFi protocol that hedges against the inherent impermanent loss of
Uniswap liquidity pools using NFTs. It does that by creating a derivative (NFT)
of the expected value of such IL, using heavy off-chain computation in
optimistic rollups.

You can mint and trade such NFTs, and claim protection in the protocol.
Meanwhile, the insurance is funded by HEDH token using bonding curve so you can
buy and sell HEDH token in our protocol as well.

## How it's Made

This project, Hedgehog Protocol, is a financial engine designed to shelter a
normal DEC trader from downside risk. In general, the protocol works based on
the central limit theorem.

The frontend integrates with [Wallet Connect](https://walletconnect.com/), the
communications protocol for Web3, enabling wallets and apps to securely connect
and interact.

It uses Cartesi to calculate the insurance premium, Chainlink to get the live
price of ETH/USD, and Wallet Connect to manage the account. We use Solidity
smart contract as backend, react.js as front end. Cartesi was deployed in the
Monte Carlo simulation to calculate the premium price.
