---
title: Nucleus
description: DeFi lending protocol with real-time dynamic risk management
thumbnail: "H0y6JCx.png"
logo: "H0Da4Np.png"
gallery:
  - "projects%2Fsztuz%2Fimages%2FScreen%20Shot%202022-11-06%20at%208.47.13%20AM.jpg"
  - "projects%2Fsztuz%2Fimages%2FScreen%20Shot%202022-11-06%20at%208.47.21%20AM.jpg"
  - "projects%2Fsztuz%2Fimages%2FScreen%20Shot%202022-11-06%20at%208.47.33%20AM.jpg"
  - "projects%2Fsztuz%2Fimages%2FScreen%20Shot%202022-11-06%20at%208.47.52%20AM.jpg"
  - "projects%2Fsztuz%2Fimages%2FScreen%20Shot%202022-11-06%20at%208.48.06%20AM.jpg"
  - "projects%2Fsztuz%2Fimages%2FScreen%20Shot%202022-11-06%20at%208.48.34%20AM.jpg"
tags:
  projectStage: Hackathon Project
  event: ETH San Francisco
  winner: 1st Place
  technology:
    - Cartesi Rollups
    - Python
    - Linux
links:
  website:
    - "https://ethglobal.com/showcase/nucleus-sztuz"
  github:
    - "https://github.com/xtremistan/nucleus"
    - "https://github.com/xtremistan/nucleus/blob/master/nucleus/nucleus.py"
team:
  - name: Chuck Lam
    twitter: "http://twitter.com/WagmiFinancial"
    discord: "chuck#0779"
---

# About Nucleus

This project creates (1) a DeFi lending protocol that allows deposits into a deposit pool on a Cartesi Rollup, borrowing against deposits, repaying them, and settling net interest.

It also creates (2) sophisticated financial analytics that computes collateral risk limits based on on-chain data represented within Cartesi.

# Technical Details

The (1) DeFi lending protocol and (2) financial analytics were coded in Python and run on a Linux virtual machine on Cartesi. Deposits, withdrawals, and settlements are transacted on a Cartesi Hardhat roll up. Onchain data feeds are fed from representations on Cartesi of major cryptocurrencies (ETH, stablecoins).
