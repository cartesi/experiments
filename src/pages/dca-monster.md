---
title: DCA.Monster
description:
  DCA.Monster is an Automated Market Maker (AMM) leveraging ERC20 streams for
  granular, efficient on-chain Dollar Cost Averaging (DCA).
lastUpdated: Apr 10, 2024
logo: 'logo.png'
thumbnail: 'logo.png'
gallery:
  - image: '1.png'
  - image: '2.png'
  - image: '3.png'
  - image: '4.png'
  - image: '5.png'
  - image: '6.png'
tags:
  projectStage: In progress - Alpha
  projectTypes:
    - DeFi
  languages:
    - Python
    - Solidity
  stacks_and_libraries:
    - Docker
    - Hardhat
    - Linux
    - Polygon
    - ReactJS
    - SQLite
links:
  website:
    - 'https://dca.monster/'
  github:
    - 'https://github.com/dcamonster/cartesi-defi-modular-components'
    - 'https://github.com/md0x/dca.monster'
  demo: https://dca.monster/
team:
  - name: Salvador Pablo Maldonado Turci
    discord: 'mangolassi#0'
    twitter: 'https://twitter.com/pmturci'
related:
  - p2pix
  - bidsquad
  - bima-coin
---

## About DCA Monster

DCA.Monster blends the concepts of Automated Market Makers and Streamable
Tokens, offering an innovative approach to token exchanges that facilitates
detailed dollar-cost averaging (DCA). This approach leverages the computational
strengths of Cartesi rollups, a necessity for bypassing the computational
limitations faced by traditional Ethereum Virtual Machine smart contracts.

At its core, DCA.Monster is powered by two Python-developed components. The
first component transforms conventional ERC20 tokens into Streamable Tokens.
This transformation is facilitated through integration with Cartesi's
infrastructure contracts, which handles the conversion by bridging standard
ERC20 tokens into their rollup version that permits their transfer over time,
rather than in a single transaction. This mechanism enables transactions that
run across a defined duration, enriching the token's utility within the
ecosystem.

The second component is an AMM designed to work in harmony with these Streamable
Tokens, introducing the concept of ""Stream Swaps."" These swaps are
transactions that occur over a period, aligning perfectly with the streamable
nature of the tokens. Such functionality naturally embeds DCA into the process,
allowing users to engage in trades that capture an infinite spectrum of prices
over time. This method stands out for its efficiency and cost-effectiveness, as
it condenses what would traditionally require multiple transactions into a
singular, streamlined operation on the main blockchain.

Together, these components signify a leap forward in DCA strategy
implementation, enabling precision and efficiency previously unattainable in the
DeFi space.

## What's next

Our project's development roadmap is strategically segmented into three pivotal
milestones, each designed to progressively build upon DCA.Monster's capabilities
and ensure a smooth transition to a live, operational platform:

1. Enhance User Interface and Streamline User Experience: Develop a
   user-friendly interface and simplified user flow for stream swapping, along
   with a comprehensive dashboard for easy management of transactions and stream
   activities.

2. Integrate Synthetic Tokens and Oracle Model: Integrate synthetic tokens
   representing a variety of assets, supported by a pooled oracle model
   utilizing Coinbase and Binance prices, to expand trading options and enhance
   platform versatility.

3. Mainnet Launch and Operational Readiness: Finalize legal and governance
   structures, execute the mainnet launch to bring DCA.Monster live, and
   initiate community engagement through incentives for early adopters, marking
   the platform's transition to a fully operational state.

Moving forward, our plan to leverage Cartesi involves deepening the integration
of its unique capabilities into DCA.Monster to enhance the platform's efficiency
and scalability. We aim to further utilize Cartesi's Linux environment for
complex computations and data handling, which are crucial for streamlining our
AMM and streamable tokens operations. Additionally, we're exploring ways to
harness Cartesi's decentralized computational features to improve transaction
processing and security. By aligning closely with Cartesi's roadmap and
technological advancements, we intend to continuously innovate and expand
DCA.Monster's features, ensuring it remains at the forefront of DeFi solutions.

Find our second grant proposal in Charmverse:

https://app.charmverse.io/cartesi-grants-program/dca-monster-7992275308181851
