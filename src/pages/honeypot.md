---
title: Honeypot
description:
  Honeypot is a dApp designed to test the security of Cartesi Rollups, giving
  users and developers confidence in using Cartesi’s technology with real
  assets.
lastUpdated: May 22, 2024
logo: 'logo.png'
thumbnail: 'logo.png'
gallery:
  - image: 'image1.jpeg'
  - image: 'image2.webp'
tags:
  projectStage: Stable release
  projectTypes:
    - Dev-Tool
  languages:
    - C++
    - Typescript
    - Solidity
  stacks_and_libraries:
    - React.js
    - Docker
    - Linux
links:
  website:
    - 'https://honeypot.cartesi.io/'
  github:
    - 'https://github.com/cartesi/honeypot/'
  discord:
    - 'https://discord.gg/cartesi'
related:
  - bugbuster
  - drawing-dapp
  - ultrachess
---

## About Honeypot

The Honeypot dApp is an example of Cartesi's application-specific optimistic
rollup technology. More than just a hacking challenge, it paves the way for a
new era of specialized blockchain applications. Here are some technical details
about it:

- Optimistic Rollup Design: Honeypot is built as an optimistic rollup that is
  specifically tailored for a single dApp. This design choice allows it to
  operate independently without competing for block space with other dApps,
  providing both customization freedom and optimized performance.

- Infrastructure Components: The key components include on-chain code, the
  Cartesi node, and the Cartesi machine, which together ensure efficient
  operation. The on-chain code acts as a mediator between off-chain components
  and other blockchain elements, allowing for modular interactions.

- Data Handling and Security: The Honeypot uses an Input Box contract for data
  availability, which maintains an append-only list of hashes from user inputs.
  This design ensures data integrity and allows the off-chain machine to
  validate inputs independently. Security features are built into the
  application, focusing on validating output and managing state root commitments
  through a Consensus interface and an Authority contract.

- Upgradeability and Deployment: Honeypot employs a non-upgradeable deployment
  strategy to ensure immutability once deployed. This means the application,
  once set, does not change, reflecting a strong commitment to security and
  consistency.

- Asset Management: The application uses a feature called Portals for asset
  management, facilitating secure asset transfers between layers. These
  transfers are verified but managed independently by the dApp, allowing
  efficient and cost-effective asset handling.

For more detailed insights into the Honeypot application, including its
functionalities and deployment procedures, consult the repository's
comprehensive README. Not only does it describe the inner workings of the dApp,
but it also offers a step-by-step guide on how anyone can launch their own
honeypot: https://github.com/cartesi/honeypot/blob/main/README.md

## What's next

What happens if the honeypot is cracked? The winner gets the funds - that’s it.
Cartesi will then study the breach, solve it, and deploy another Honeypot to
keep strengthening the core technology.

## Read more

- [Introducing Honeypot](https://cartesi.io/blog/introducing-honeypot/)
- [Honeypot Deep Dive](https://cartesi.io/blog/honeypot-deep-dive/)
