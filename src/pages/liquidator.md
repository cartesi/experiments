---
title: Liquidator
description:
  We want help Developers and DApps onboard people easier by having the needed
  payment systems, to allow their DApps to request payment from users and
  off-ramping to fiat.
foundedOn: 2023-11-29
thumbnail: 'liquidator.png'
logo: 'logo.png'
tags:
  projectStage: Proof of concept
  projectTypes:
    - Dev-Tool
    - DeFi
  languages:
    - Python
    - JavaScript
  stacks_and_libraries:
    - Docker
    - Linux
links:
  github:
    - 'https://github.com/liquiditylibs'
team:
  - name: Zach Prater
    discord: zach1422
    twitter: https://twitter.com/ZacPrater
  - name: Alejandro Soto
    discord: '@alejandro99so'
    twitter: https://twitter.com/alejandro99so
  - name: Ersin Kiymaz
    discord: '@ersin_kiymaz'
    twitter: https://twitter.com/ersinkiymaz
  - name: Krzysztof Ziolkowski
    discord: '@TwentyOne_37'
    twitter: https://twitter.com/TwentyOne_37
  - name: Felipe Grael
    discord: '@felipefg'
    twitter: https://twitter.com/felipefg

related:
  - dca-monster
  - bugbuster
  - p2pix
---

## About Liquidator

Liquidator: User-Centric Transactions Enhanced by prl.js

Overview: Liquidator is a revolutionary platform in the DApp space, focusing on
facilitating smooth transactions between fiat and stablecoin currencies.
Primarily aimed at end-users, it simplifies user onboarding and currency
exchange processes in decentralized applications (DApps), making financial
interactions more accessible and efficient.

Key Features:

User-Friendly Transactions: Liquidator offers a platform where users can easily
set up and conduct fiat-to-stablecoin transactions, providing customizable
settings for stablecoin types, blockchain networks, and exchange rates. Secure
Exchange Mechanism: It incorporates QR code-based transactions and an escrow
service, ensuring secure and trustworthy exchanges between parties. Integration
with Payment Request Library (prl.js):

Developer-Centric Tool: While Liquidator serves end-users, prl.js is
specifically designed for developers. This open-source library streamlines the
incorporation of payment request systems into DApps, greatly simplifying backend
development. Efficient Payment Processing: prl.js allows developers to enable
ENS Domain-based payment requests in their DApps, making the payment process
more intuitive and streamlined for users. Cross-Chain Compatibility: Equipped
with Cross-Chain Interoperability Protocol (CCIP) support, prl.js enables
developers to build DApps capable of executing transactions across various
blockchain networks, enhancing the functionality and reach of DApps in the
decentralized finance landscape.

Liquidator, with the integration of prl.js, presents a unique combination of
user-centric transactional ease and developer-centric technical prowess. While
Liquidator provides a seamless and secure transaction platform for users, prl.js
equips developers with sophisticated tools to build versatile and user-friendly
payment systems within their DApps. Together, they forge a more inclusive and
efficient DeFi ecosystem.

How it's Made The project is composed by the frontend, implemented in
javascript, using Next.js, the backend, which runs in an application specific
rollup powered by Cartesi and compatible with EVM networks as the base layer,
and a javascript library to streamline the development of applications that
request payment across chains.

The direct use case of this application involves two personas: a fiat owner, who
is willing to pay bills in order to receive cryptocurrency, and a Stablecoin
owner, who wants to pay bills using QR Codes or 1D barcodes. First, the fiat
owner has to sign up to the application stating which currency he is willing to
use as Fiat, how much he is willing to pay, his preferred stablecoins or
cryptos, and the desired rate for each one. In order to flag himself available,
he sends this information via blockchain to the DApp, in order to be queried by
Stablecoin owners. The second step for the stablecoin owners to send a picture
of the qrcode and the crypto to the Liquidator contract. The fiat owner will be
notified and, once he finishes the payment he submits the receipt on chain as a
proof of payment. The crypto owner then verifies this proof and sends the
approval to the Liquidator DApp so that the crypto can be released to the fiat
owner.

Using the power leveraged by the Cartesi macine, the Dapp could use more
advanced validation strategies such as verifying a cryptographic signature or
even using computer vision to validate the proof, further streamlining the
process.

## Describe what could be next for your project?

Making it an Open Source Liquidity Aggregator that can use Chainlinks CCIP to
accept stablecoins on any chain and build out the escrow backend & dispute
mechanism within Cartesi.
