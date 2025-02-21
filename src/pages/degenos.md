---
title: DegenOS
description:
  DegenOS is a revolutionary decentralized operating system built on Cartesi
  Rollups with Avail as its Data Availability (DA) layer. It provides a
  comprehensive suite of Web3 applications within a unified, secure environment,
  enabling users to interact with various decentralized services through a
  seamless interface. Users can utilize the decentralized platform to swiftly
  perform degen web3 stuff.
lastUpdated: Nov 26, 2024
thumbnail: 'logo.png'
logo: 'logo.png'
gallery:
  - image: 'image1.png'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - DeFi
  languages:
    - JavaScript
    - TypeScript
  stacks_and_libraries:
    - Docker
    - Push
    - Ethers.js
    - MetaMask
    - Next.js
    - React.js
    - Node.js
    - TailwindCSS
links:
  github:
    - 'https://github.com/Suryansh-23/degenOS'

team:
  - name: Prathmesh Ranjan
  - name: Mani Bajpai
  - name: Kaustubh Agrawal

related:
  - bugbuster
  - drawing-dapp
  - dca-monster
---

## Project Description

DegenOS is a decentralized operating system that revolutionizes Web3 interaction
by providing a unified interface for essential DeFi and social applications.
Built on Cartesi Rollups with Avail as the Data Availability layer, it combines
scalability with powerful off-chain computation capabilities. Users access the
system through secure wallet-based or email authentication powered by Dynamic.
The ecosystem features six core applications: degenSwap for token exchanges via
CoW DAO, degenScout for multi-chain block exploration using Blockscout,
degenMetric for analyzing Uniswap pools through The Graph protocol, degenSocial
for ENS and social platform integration, degenShield for comprehensive token
risk analysis, and degenChef for decentralized recipe sharing via Push Protocol.
The architecture ensures verifiable computations through Cartesi's notice system
and enables on-chain actions via vouchers, while the backend service manages
data-intensive operations. EIP-712 signing guarantees secure data transfer
between layers, creating a robust and transparent system. This innovative
platform bridges the gap between traditional OS functionality and Web3
capabilities, offering users a seamless experience while maintaining the
security and transparency of blockchain technology.

## How it's Made

DegenOS is built on Cartesi Rollups, providing a Linux-based VM for complex
off-chain computations while maintaining blockchain security. We integrated
Avail as our data availability layer, using EIP-712 signing for secure data
transfers. The authentication system leverages Dynamic SDK for both wallet and
email-based logins, creating a seamless Web2/Web3 experience. Our six core
applications are strategically integrated with leading protocols: degenSwap uses
CoW DAO's SDK for MEV-protected trades, degenScout builds on Blockscout for
multi-chain exploration, degenMetric utilizes The Graph for Uniswap analytics,
degenShield implements custom risk scoring algorithms, degenSocial handles ENS
lookups, and degenChef leverages Push Protocol for decentralized communication.
The backend service, built with Node.js and TypeScript, manages data-intensive
operations and coordinates between the Cartesi VM and integrated protocols. We
implemented custom data bridges and compression techniques for efficient
cross-layer communication, along with parallel processing and caching mechanisms
for optimal performance. The system uses a notice/voucher architecture for
verifiable computations and on-chain actions, ensuring security while
maintaining efficiency.

## Core Infrastructure

1. Rollup Layer: Implemented using Cartesi Rollups for:
   - Enhanced scalability of decentralized applications
   - Advanced computational capabilities within the rollup VM -Secure and
     verifiable off-chain computations
2. Data Availability: Leverages Avail DA layer for:
   - Reliable data storage and retrieval
   - Transparent data chunk transfer using EIP-712 signing
   - Efficient cross-layer communication

### Authentication System

1. Powered by Dynamic for flexible authentication options:
   - Email-based login
   - Web3 wallet connection
   - Secure session management

### Backend Infrastructure

1. Dedicated backend service handling:
   - Resource-intensive computations for degen applications
   - Data aggregation and processing
   - Interface management between OS and underlying protocols
   - Integration with Blockscout, Push Protocol, and other services

## Integrated Applications

1. degenSwap

- Integrated swap widget powered by CoW SDK
- Efficient token exchange functionality
- Optimized trading routes

2. degenScout

- Multi-chain block explorer
- Built on Blockscout SDK
- Real-time blockchain data visualization
- Comprehensive transaction tracking

3. degenMetric

- Advanced DeFi analytics tool
- Integration with The Graph protocol
- Uniswap V3 pool analysis
- Financial metrics computation
- Performance visualization

4. degenSocial

- Social platform integration hub
- ENS forward lookup functionality
- Cross-platform social identity resolution
- Integrated social platform mapping

5. degenShield

- Token risk analysis platform
- Multi-API data aggregation
- Risk metric computation
- Comprehensive token assessment
- Real-time risk monitoring

6. degenChef

- Decentralized recipe sharing platform
- Built on Push Protocol
- Real-time notifications
- Decentralized content sharing
- Community interaction"

## What's next

On adequate support, our team can continue to work on this full-time. And take
the project from a MVP stage to a viable and usable product. Although, this was
developed by keeping in mind as a hackathon project. Our team is very
enthusiastic on the initial idea.
