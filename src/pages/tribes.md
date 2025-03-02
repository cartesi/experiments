---
title: 'Tribes: Building and Sharing Value'
description:
  The creator's current economic model is in shambles. There's no meaningful
  bond between creators and their followers, no community spirit, and
  distribution of value is virtually non-existent. Tribes empower creators and
  enable deeper community connections
foundedOn: 2023-11-29
thumbnail: '11110756c9dc-1.jpg'
logo: 'logo.jpg'
tags:
  projectStage: Hackathon Project
  other_tags:
    - 'Cartesi Experiment Week'
  projectTypes:
    - Social Identity
  languages:
    - Python
    - JavaScript
    - TypeScript
    - Solidity
    - HTML
  stacks_and_libraries:
    - Docker
    - React.js
    - Ethers.js
    - Next.js
links:
  github:
    - 'https://github.com/felipefg/tribes'
team:
  - name: Bruno Maia
    discord: '@bmaia18'
  - name: Felipe Fink Grael
    discord: '@felipefg'
  - name: Pedro Argento
    discord: '@PedroArgento'
  - name: Henrique Marlon
    discord: '@HenriqueMarlon'
  - name: Manu Morais
    discord: '@manumorais1'
related:
  - housy
  - techai
  - cartenix
---

## Tribes: Building and Sharing Value

Our project's technical architecture relies on the establishment of a robust
foundation. This foundation comprises essential components, namely Sepolia for
Deployment and the Cartesi Execution VM, which form the backbone of the entire
system. These components, along with the incorporation of Chainlink technology,
are integral to the successful deployment of app-specific rollups and the
handling of a complex reverse auction mechanism.

We leveraged Sepolia to enable the deployment of app-specific rollups. Sepolia
is a valuable tool that streamlines the process of deploying layer 2 solutions.
It provided us with a straightforward means to set up and manage our rollups,
thus optimizing the deployment process.

The execution layer is a critical component of our project, primarily due to the
complexity of the code, which encompasses a reverse auction mechanism. Given the
intricacies of the auction code, rendering it impossible to run on the
traditional EVM, we opted for the Cartesi Execution VM. Cartesi's execution
environment offers versatility and higher computational capacity, thanks to its
app-specific rollup architecture. This rollup solution is designed to enhance
the scalability, computational capabilities, and user experience of
decentralized applications (dApps).

We use Sepolia as a data availability layer that maintains a log of inputs
specific to DApp rollups. The Cartesi VM processes these inputs, such as auction
bids, and is capable of generating verifiable outputs to be executed on the base
layer.

While the Cartesi Execution VM allows off-chain computation, it maintains
security through a combination of cryptographic proofs and decentralized
validation. The results of off-chain computations are periodically anchored back
to the layer 1 blockchain, ensuring trust and security. Disputes can be resolved
on-chain if disagreements arise.

Additionally, we utilized Chainlink Datafeeds for real-world data streaming and
price feeding. This enabled users to charge in USD, covering their real-life
content creation costs, while maintaining all financial transactions within the
ETH blockchain.

Chainlink Automation also played a significant role in our project by enabling
us to schedule periodic on-chain jobs. This automation provided a heartbeat,
supplying the DApp with the blockchain timestamp at regular intervals.

We integrated Chainlink CCIP (Cross-Chain Interoperability Protocol) to
facilitate cross-chain communication and data transfer. This allowed us to
implement multichain functionalities, including the generation of inputs in the
Mumbai network that trigger effects on our base layer, Sepolia.

## Describe what could be next for your project?

We are contacting creator´s platforms to evaluate their interested on
integrating and exploring a PoC
