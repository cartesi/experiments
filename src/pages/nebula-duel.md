---
title: Nebula Duel
description:
  Nebula Duel is an on-chain zero player game built on Cartesi, it offers an
  exciting blend of DeFi and gaming. Here, players acquire characters and engage
  in battles based on their character choices and a selected strategy. Unlike
  typical games, success in a Nebula Duel isn't just about a character's
  strength and specifications but also relies heavily on the user's choice of
  strategy.
lastUpdated: Mar 3, 2024
thumbnail: 'logo.png'
logo: 'logo.png'
gallery:
  - image: 'screen1.png'
tags:
  projectStage: In progress - Alpha
  projectTypes:
    - Games
  languages:
    - HTML
    - JavaScript
    - TypeScript
    - Rust
    - Solidity
  stacks_and_libraries:
    - Docker
    - Ethers.js
    - Hardhat
    - MetaMask
    - ReactJS
    - TailwindCSS
links:
  github:
    - 'https://github.com/Nonnyjoe/nebulaDuel'
team:
  - name: Idogwu Emmanuel Chinonso
related:
  - cartesian-battleship
  - cartesi-warewolf
  - bidsquad
---

## About Nebula Duel

Nebula Duel is an on-chain zero-player duel game built to incorporate the
thrills of duels and combat with the joy and gains of Defi. It aims to provide
gamers with an exciting and immersive experience that will keep them entertained
and wanting more.

Players can purchase characters, and these characters can be minted as NFTs that
can be exchanged or sold on the marketplace. The interesting thing here is that
we plan to implement dynamic NFTs (dNFTs). Dynamic NFTs are ones whose metadata
can be upgraded. We opt for it so that, as an NFT character is being used for
combat, its attributes such as health, strength, and attack keep increasing or
reducing, and these changes need to be reflected or updated into the character.
dNFT makes this upgrade possible.

For selling or buying these dNFTs, we are going to implement a marketplace on
the platform where gaming tools, characters, dNFTs, and other stuff can be
traded. This is to make it more fun and worthwhile for gamers, as only real
ERC20 $nebula tokens can be used on the marketplace, and this token can be sold
for $USDT or any other token.

We opt to build Nebula duel on Cartesi because of the high computational
requirement needed to run the game. The nebula duel algorithm is complex and
will be very heavy for regular blockchain protocols. Also, running the algorithm
on regular protocols will be very expensive for players and the team as a whole.
Hence, the best option was to take advantage of the huge computational power
available on Cartesi.

So the idea is to run the backend on Cartesi, then consume the data from the
backend by querying the subgraph. We have built an MVP for this, and it is
already working.

## What's next

The next stage for Cartesi is to complete building the project then deploy to
Mainnet.
