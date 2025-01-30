---
title: DeCode
description: Decentralised Coding Platform
lastUpdated: Oct 20, 2023
thumbnail: 'H0y6JCx.png'
logo: 'H0Da4Np.png'
gallery:
  - image: '3f64d2be-5dc6-4613-be1a-24fda1b7f675.png'
  - image: '1d2324fb-6af1-41ff-bfe3-352f9cd469f4.jpeg'
  - image: '0c5e417b-6702-4bb4-a3c7-a914b1bcc546.jpeg'
  - image: '79588968-4e19-402f-988f-452aae843007.jpeg'
  - image: '9117cf22-b71c-4fb7-814c-7d7d1c067b28.jpeg'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - Others
  languages:
    - JavaScript
  stacks_and_libraries:
    - Covalent
    - Push
links:
  website: 'https://devfolio.co/submissions/decode-f05d'
  github:
    - 'https://github.com/0xVikasRushi/DeCode-ETHIndia'
team:
  - name: Vikas Rushi
    twitter: https://twitter.com/vikas_rushi
  - name: Deekshith Balmuri
    twitter: https://twitter.com/DeekshithRao7
  - name: Hitesh Lalwani
    linkedin: https://in.linkedin.com/in/hiteshlwni/
  - name: Shubh Chudasama
    linkedin: https://www.linkedin.com/in/c-shubh/
related:
  - housy
  - techai
  - cartenix
---

## About DeCode

DeCode is an experimental decentralized coding contest platform designed to
bring an alternative to existing coding platforms like codechef.com and
codeforces.com.

Traditional platforms often lack transparency and trust in their judging and
ranking processes. DeCode aims to address these issues while providing a secure,
decentralized environment for competitive coding contests.

Since running a competitive coding platform involves high traffic and extensive
computation, it's not feasible to simply run it on a smart contract. To overcome
these limitations, DeCode makes use of Cartesi, a Layer 2 solution for Ethereum
and other L1 blockchains based on the EVM.

[Cartesi's Optimistic Rollups](https://docs.cartesi.io/cartesi-rollups/) provide
higher processing power at lower expenses without compromising on speed and
languages supported. In fact, DeCode's Cartesi code is written in JavaScript.

DeCode also utilizes Covalent for creating a leaderboard of people owning their
token and the Push Protocol for sending important notifications.

## Technical Details

DeCode uses the
[ELO Rating System](https://en.wikipedia.org/wiki/Elo_rating_system) to update
user ratings after a contest ends. Implementing this system on a
[Solidity](https://soliditylang.org/about/) smart contract can be
computationally intensive and expensive. To tackle this, the team uses the
"calc-u-rating" npm package for ELO Rating logic, which is compiled using
webpack to create a single entry point (dist/main.js) for execution on the
Cartesi Machine.

Key Technologies:

1. Cartesi: providing computational power on Linux VMs for better performance
   and concurrent job processing
2. [Covalent:](https://www.covalenthq.com/about/) A unified API for increased
   visibility across Web3 data points
3. [Push Protocol:](https://push.org/faq) A Web3 communication network enabling
   cross-chain notifications and messaging for DApps, wallets, and services

DeCode's platform also integrates Web2 technologies, such as Next.js with
Tailwind CSS, DigitalOcean, and MongoDB.

#### Challenges Faced

The team faced a few challenges during the development process:

1. Bulk transfer of ERC20 tokens failing frequently.
2. Setting up the environment for the Cartesi Machine and deploying it.
3. Implementing push notifications when the user is still active on the website.

Despite these challenges, DeCode's experimental and decentralized coding contest
platform demonstrates a promising use case for Cartesi's Optimistic Rollups and
other Web3 technologies in the competitive coding space.
