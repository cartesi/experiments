---
title: COBE
description:
  An Order Book Exchange that allows inputs from Ethereum but makes the
  computation off-chain trustlessly via Cartesi Rollups.
foundedOn: 2023-10-20
thumbnail: 'H0y6JCx.png'
logo: 'H0Da4Np.png'
gallery:
  - image: '1.png'
  - image: '2.png'
  - image: '3.png'
  - image: '4.png'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - DeFi
  languages:
    - Python
links:
  website: 'https://www.ethglobal.com/showcase/cobe-cartesi-order-book-exchange-app-rollup-4e5s1'
  github:
    - 'https://github.com/orkunkilic/cartesi-exchange-dapp'
team:
  - name: Orkun Mahir Kılıç
    twitter: 'https://twitter.com/0x_orkun'
    discord: 'Orkun#8389'
related:
  - dca-monster
  - hedgehog-protocol
  - p2pix
---

## About COBE

COBE - Cartesi Order Book Exchange App Rollup is a verifiable off-chain CLOB
exchange built with
[Cartesi Rollups](https://docs.cartesi.io/cartesi-rollups/overview/). COBE's
core processing and matching engine is built with
[Python](https://www.python.org/about/) but it works on
[Ethereum](https://ethereum.org/en/about/) 🤯 Thanks to the unique architecture
of Cartesi, our exchange can get actions of users from the underlying layer,
however can process them off-chain with 100% verifiability. COBE reads inputs
from the L1 smart contract, processes transactions, and reports the execution
traces. These execution proofs can be verified by anyone.

Why Cartesi? COBE is just a demonstration to show what can be done with
[Cartesi’s Linux runtime](https://docs.cartesi.io/machine/target/linux/). By
using Cartesi, we managed to write a complex, but MVP level, matching engine in
Python. In current VMs like EVM, it is not easy and not feasible to build a
perfect matching engine. Cartesi offers the flexibility of RISC architecture and
Linux Runtime which means we can write even more complex processes. We can even
write it with Javascript, Rust or C++.

## How it's Made

COBE has 4 main components.

1. Cartesi Rollup - this is the part where transactions are processed, which
   means the order book and the engine lives inside this rollup. This rollup is
   coded with Python and uses two main classes to manage the Order Book and
   Portfolio.
2. Indexer API - this indexer API continuously polls the Rollup GraphQL to get
   the reports (events). By using events, it creates an SQL database in order to
   serve the UI faster and better. Also, the indexer has a built-in Rest API
   inside of it which serves the orderbook and balances the UI.
3. UI - UI shows the ask and bid book and user balances. UI allows people to
   deposit ERC20s into their portfolio, and add ask or bid orders.
4. L1 - L1 uses generic Cartesi Rollup contracts, like InputFacet, portal, and
   DApp etc.

## More

- [Video](https://stream.mux.com/9lME7QKx9kB301r5muwazgdq0201TIyaF7oXm7137UuTek/high.mp4)
- [Presentation](https://docs.google.com/presentation/d/1D5HkQzMLFLTmDWX0zcDR9ufliIv7tmmDTtDuLEtPsMY/edit#slide=id.g2439970fca7_0_18)
