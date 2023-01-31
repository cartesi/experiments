---
title: LIFE
description: Massively-multiplayer-on-chain Conway's game of life where user's fight for dominance of a 1000X1000 grid.
thumbnail: "https://iili.io/H0y6JCx.png"
logo: "https://iili.io/H0Da4Np.png"
tags:
  projectStage: Hackathon Project
  event: ETH San Francisco
  winner: 2nd Place
  technology:
    - Cartesi Rollups
links:
  website:
    - "https://ethglobal.com/showcase/life-81m99"
  github:
    - "https://github.com/TheExpandingPolytope/life"
    - "https://github.com/TheExpandingPolytope/lifeEntire"
team:
  - name: Jesse Engerman
    twitter: "http://twitter.com/gwapchain"
    discord: "glockchain#5756"
  - name: 0x geeb
    twitter: "http://twitter.com/0xgeeb"
    discord: "0xgeeb#6249"
  - name: Michael Kuvshynov
    twitter: "http://twitter.com/im_mkx"
    discord: "!!mkx#6969"
---

# About LIFE

Massively-multiplayer on-chain Conway's game of life..with real consequences.

This Conway's Game of Life experience will exist on a 1000X1000 grid. It will be open to anyone with an Ethereum address and run on Cartesi's optimistic rollup solution.

Users are verified through Worldcoin/PolygonID's privacy preserving identity solutions and given a limited amount of blocks they are allowed to submit per day (This is to prevent spam and create a sense of scarcity)

The objective of each user is to fight for control of the grid by placing blocks in a strategic manner such that they own more of the grid than their opponents by the end of a snapshot.

Snapshots of the entire grid are taken by the end of each day (or hour to present the point) and submitted the underlying blockchain as an NFT(image on IPFS/Filecoin). This NFT will be fractionally owned by game participants based on their dominance of the grid.

# Technical Details

- We'll use Worldcoin for identity. (To prevent spam)
- We'll use Cartesi for execution. (For large execution scope)
- We'll use IPFS for storage. (For grid snapshots)
