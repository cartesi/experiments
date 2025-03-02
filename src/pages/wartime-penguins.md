---
title: 'Wartime Penguins🐧'
description:
  This project uses Cartesi Coprocessor to make high quality generative artwork
  and publishes the result as NFT on a Wartime Penguins theme. Because Penguins
  are done being just soft and cuddly.
foundedOn: 2025-02-20
thumbnail: 'logo.png'
logo: 'logo.png'
gallery:
  - image: 'image1.jpeg'

tags:
  projectStage: Hackathon Project
  projectTypes:
    - Art
  languages:
    - JavaScript
    - Go
    - Rust
    - Solidity
  stacks_and_libraries:
    - EigenLayer
    - Docker
    - React.js
    - Node.js
    - Ethers.js
    - IPFS
links:
  github:
    - https://github.com/stskeeps/wartime_penguins

team:
  - name: Carsten Munk

related:
  - bugbuster
  - scribbl
  - escape-from-tikal
---

## About Wartime Penguins

Wartime Penguins leverages the Cartesi Coprocessor for off-chain computation,
enabling resource-intensive generative art tasks that would be prohibitively
expensive or impossible with pure Solidity or ZK setups.

All generated supporting assets, are made to be generateable by anyone and
storable on IPFS to ensure full transparency, reproducibility, and
immutability—preventing any chance of the project being ""ruggable.""

We incorporated Keccak256 multihash capabilities for consistent content
verification using Helia and other IPFS tools. The final NFT media, an
approximately 3 MB animated GIF, is produced by the Coprocessor and then stored
on IPFS and referenced via an ERC-721-compliant metadata standard.

A solidity contract mints these NFTs based on the Coprocessor result, pointing
to the final IPFS CID, and because the entire generative process is
deterministic, anyone can independently replicate and validate the artwork.

<iframe width="560" height="315" src="https://www.youtube.com/embed/r7-nBxFY2xw?si=aRPwNwTisX64H2sD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## What's next

Wartime Penguins can serve as a valuable reference for any development team
seeking to incorporate off-chain computation for NFT creation.
