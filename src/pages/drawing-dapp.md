---
title: Drawing DApp
description: Drawing canvas with option to mint images as NFTs
lastUpdated: Arp 10, 2024
logo: 'logo.png'
thumbnail: 'logo.png'
gallery:
  - image: 'CartesiDrawingDApp.png'
  - image: 'screen1.png'
  - image: 'screen2.png'
  - image: 'screen3.png'
  - image: 'screen4.png'
  - image: 'screen5.png'
  - image: 'screen6.png'
tags:
  projectStage: Release Candidate
  projectTypes:
    - Art
  languages:
    - CSS
    - JavaScript
    - TypeScript
    - Solidity
  stacks_and_libraries:
    - Docker
    - Ethers.js
    - MetaMask
    - Node.js
    - ReactJS
    - TailwindCSS
    - Fabric.js
    - Node-canvas
    - wagmi.sh
links:
  github:
    - 'https://github.com/weAreProductive/drawing-DApp/'
team:
  - name: Dimitar Angelkov
    linkedin: 'https://www.linkedin.com/in/angelkov/'
    discord: 'dimitar#3019'
  - name: Milena Tomova
    linkedin: 'https://www.linkedin.com/in/milena-tomova-543108106/'
  - name: George Georgiev
    linkedin: 'https://www.linkedin.com/in/jorogeorgiev/'
related:
  - cartesian-battleship
  - ultrachess
  - ballaum-worldcup-betting-dapp
---

## About Drawing DApp

The Drawing DApp is a digital drawing canvas that operates on Cartesi Rollups.
The main goal of this project is to showcase the efficient operation of 3rd
party JavaScript libraries such as [Fabric.js](http://fabricjs.com/) and Node
Canvas (a [Cairo](https://www.cairographics.org/) backed Canvas implementation
for NodeJS) on the RISC-V Cartesi VM environment, ensuring the immutability of
canvas data within the Rollups.

Components of the application include a front-end built on ReactJS with a
Fabric.js HTML5 drawing canvas. Users can create new drawings or modify existing
ones once connected. Drawings can be saved in the Rollups or turned into NFTs.
The API, built on NodeJS, facilitates exporting drawings to SVG & PNG, storing,
and uploading to IPFS for NFT creation. The Cartesi Rollups Back-end (Sunodo.io)
is a NodeJS application running on a RISC-V Linux VM with Cartesi Rollups. It
processes Rollups INPUTs, generates actions, and creates snapshots, notices, and
vouchers using Fabric.js & Node Canvas for verified Drawings NFT data.
Additionally, there is an NFT Smart Contract in place.

The deliverables for this project include UI Design and Development for the
front-end application, setting up Rollups with the back-end application, and
fully functional front-end development for the Drawing DApp.

For more details, refer to the full proposal at:
https://governance.cartesi.io/t/in-response-to-rfp-for-developing-a-decentralized-painting-canvas-on-cartesi-rollups/80.
