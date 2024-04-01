---
title: LIFE
description:
  Massively-multiplayer-on-chain Conway's game of life where user's fight for
  dominance of a 1000X1000 grid.
lastUpdated: Oct 20, 2023
thumbnail: 'H0y6JCx.png'
logo: 'H0Da4Np.png'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - Games
    - Autonomous World
  languages:
    - Python
  stacks_and_libraries:
    - Worldcoin
    - IPFS
links:
  website:
    - 'https://ethglobal.com/showcase/life-81m99'
  github:
    - 'https://github.com/TheExpandingPolytope/life'
team:
  - name: Jesse Engerman
    twitter: 'http://twitter.com/gwapchain'
    discord: 'glockchain#5756'
  - name: 0x geeb
    twitter: 'http://twitter.com/0xgeeb'
    discord: '0xgeeb#6249'
  - name: Michael Kuvshynov
    twitter: 'http://twitter.com/im_mkx'
    discord: '!!mkx#6969'
related:
  - ballaum-worldcup-betting-dapp
  - colosseum
  - ultrachess
---

## About LIFE

LIFE is a massively multiplayer on-chain adaptation of
[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life),
where users battle for dominance over a 1000x1000 grid. Conway's Game of Life is
a cellular automaton devised by the British mathematician
[John Horton Conway](https://en.wikipedia.org/wiki/John_Horton_Conway) in 1970.
It has been widely used to study emergent patterns and simulate complex systems
in various fields.

Built on
[Cartesi's Optimistic Rollup solution](https://docs.cartesi.io/cartesi-rollups/overview/),
LIFE offers a transparent and verifiable computation environment, ensuring that
the NFTs generated are trustworthy and secure. This feature is essential, as
NFTs are often created in insecure and unverifiable computational settings.

Players strive to control more of the grid than their opponents by strategically
placing their blocks, following Conway's Game of Life rules. The grid's state is
captured in snapshots taken periodically (e.g., daily or hourly), which are then
submitted to the underlying blockchain as NFTs stored on IPFS or Filecoin.

Owning an NFT representing a grid space in LIFE can be appealing for various
reasons, including the ability to showcase one's strategic prowess, immortalize
a unique pattern or formation, or even trade or sell the NFT to other interested
parties.

## Technical Details

- Identity Verification: Worldcoin prevents spam and maintains a fair gaming
  environment.
- Execution: Cartesi's Optimistic Rollup solution enables the enormous execution
  scope necessary for LIFE and provides a transparent and verifiable computation
  environment.
- Storage: IPFS is used to store grid snapshots, which are then transformed into
  NFTs.
