---
title: Nebula Duel
description:
  Nebula Duel is an on-chain zero player game built on Cartesi, it offers an
  exciting blend of DeFi and gaming. Here, players acquire characters and engage
  in battles based on their character choices and a selected strategy. Unlike
  typical games, success in a Nebula Duel isn't just about a character's
  strength and specifications but also relies heavily on the user's choice of
  strategy.
foundedOn: 2024-03-03
thumbnail: 'logo.png'
logo: 'logo.png'
gallery:
  - image: '1.png'
  - image: '2.png'
  - image: '3.png'
  - image: '4.png'
  - image: '5.png'
tags:
  projectStage: Release Candidate
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
    - Node.js
    - React.js
    - Next.js
    - Ethers.js
    - MetaMask
    - TailwindCSS
links:
  github:
    - 'https://github.com/Nonnyjoe/nebulaDuel'
team:
  - name: Idogwu Emmanuel Chinonso
    discord: 'nonso.build'
    linkedin: 'https://www.linkedin.com/in/idogwu-chinonso-a9117b1a3/'
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

Nebuladuel currently operates in two modes. Users can chose to play in mode 1,
where they get to duel agains the in house NebulaDuel Bot or they chose to play
in mode 2 where they play agains other players in realtime.

Players can purchase characters, and these characters can be minted as dynamic
NFTs that can be exchanged or sold on the marketplace. Dynamic NFTs are NFT's
whose metadata can be upgraded. This way character attributes such as health,
strength, and attack are all in sync on the game and also the onchain NFT's.

For selling or buying these dNFTs, NebulaDuel also Integrates a marketplace
where game characters and dNFTs can be traded. This is to make it more fun and
worthwhile for gamers, as only real ERC20 tokens can be used on the marketplace,
and this token can be sold for $USDT or any other token.

We opt to build Nebula duel on Cartesi due of the high computational requirement
needed to run the game. The nebula duel algorithm is complex and will be very
heavy for regular blockchain protocols. Also, running the algorithm on regular
protocols will be very expensive for players and the team as a whole. Hence, the
best option was to take advantage of the huge computational power available on
Cartesi.

So the idea is to run the backend on Cartesi, then consume the data from the
backend by querying the subgraph.

Finally NebulaDuel also integrates an in-house relayer system to enable players
interact with Nebula duel without needing to pay Gas fees. Transactions on
NebulaDuel go through this relayer which submits users transactions on their
behalf to the blockchain, thereby paying the users gas fees.

## What's next

The next step for NebulaDuel would be to research on Upgradeability models to
implement so as to enable us add more functionalities and keep the game more
interesting over time as users taste improve. At the same time we fine tune and
also add more features/ animations to whats available now.
