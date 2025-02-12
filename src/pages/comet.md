---
title: COMET
description:
  Comet is co-writing social platform where contributors earn with shared pieces
  of poetry, stories, rhymes and any form of text-based art.
lastUpdated: Jun 30, 2024
thumbnail: 'logo.webp'
logo: 'logo.webp'
gallery:
  - image: 'screen1.png'
  - image: 'screen2.png'
  - image: 'screen3.jpeg'
  - image: 'screen4.png'
tags:
  projectStage: In progress - Beta
  projectTypes:
    - Art
  languages:
    - JavaScript
    - TypeScript
  stacks_and_libraries:
    - Espresso Sequencer
    - Docker
    - NextJS
    - Node.js
    - wagmi.sh
    - rainbowkit
links:
  website: 'https://comet.ing'
  demo: 'https://app.comet.ing '
  github:
    - 'https://github.com/comet-ing/comet'
  twitter:
    - 'https://x.com/Comet_ing'

team:
  - name: Shaheen
    discord: riseandshaheen
  - name: Bruno Menezes
    discord: brunodmenezes
  - name: Cynthia
    discord: cynthiaro
  - name: Cláudio Silva
    discord: claudio.silva
  - name: Karmen
    discord: karmentruong

related:
  - bugbuster
  - drawig-dapp
  - dca-monster
---

## About Comet

With today's technological access, everyone is becoming a creator, and it's time
for this to happen collaboratively in the writing domain as well, where
co-creation and co-monetization are currently lacking. We believe that
co-writing with peers fosters shared knowledge, playful creativity, and diverse
perspectives. It enhances social interaction, creates lasting memories and
unique stories, relieves stress, and sharpens communication skills. Comet
leverages the Cartesi machine for asset management and running a fair
revenue-sharing algorithm transparently. It integrates the Espresso sequencer
for data availability of inputs(like creating jams) and lets collectors mint
jams in the form of ERC1155 tokens on the base layer.

## Architecture

Comet follows the Espresso Integration architecture with distinction in general
app functions and asset deposits as mentioned above in the current state of live
deployment.

![Architecture](/projects/comet/diagram.png)

## Current State

A partially functional prototype is running live with a backend running on
Cartesi Nonodo(Espresso support) node AND dapp contract deployed on Ethereum
Sepolia. All inputs except deposits are Espresso Decaf transactions. It supports
basic functions:

- Create a new jam
- Append to an existing jam
- Read all jams data
- Show leaderboard with scores
- Deposit ether as in-app currency

It does NOT support Withdrawal of assets
