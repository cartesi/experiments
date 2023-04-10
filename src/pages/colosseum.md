---
title: Colosseum
description: Fully on-chain fighting game that pits bots against each other and allows viewers to place bets.
logo: "H0ysdGf.png"
thumbnail: "H0LuWFI.jpg"
tags:
  projectStage: Hackathon Project
  event: Hack Boston
  winner: 1st Place
  technology:
    - Python
    - ReactJS
    - Go
    - Lua
links:
  github:
    - "https://github.com/Ultrachess/BOSTON_HACKATHON"
team:
  - name: Jesse Engerman
  - name: Christopher Pellegrini
  - name: Shravan Ramdurg
  - name: Sebastian Sepulveda
---

# About Colosseum

Colosseum is a fully on-chain bot-vs-bot fighting game that aims to address the issue of boredom while also challenging the conventional crypto games that run most of their logic off-chain.

By leveraging [Cartesi's Optimistic Rollup features](https://docs.cartesi.io/new-to-cartesi/overview/#how-are-cartesi-rollups-different) and its ability to boot a complete OS like Linux, Colosseum can integrate a Go script called Ikemen GO, an open-source fighting game sandbox, and run complex game logic on-chain.

Additionally, Colosseum allows users to place bets on the outcomes of the fights.

# Technical Details

The Colosseum project was built using Python, React, Go, Lua scripts, JSON files, and [Cartesi Rollups](https://docs.cartesi.io/cartesi-rollups/). The core functionality of the project relies on Cartesi Rollups, as they provide an abstraction layer that enables running Ikemen GO logic and handling bets on-chain in a decentralized environment.

The backend of Colosseum is almost entirely completed. However, there wasn't enough time to fully integrate the frontend interface due to challenges in setting up Ikemen GO on the developers' Mac laptops. The planned frontend included a timer to count down between fights, an MP4 player to broadcast the fights, and a table displaying a live feed of bets made on the platform.

Despite the incomplete frontend, Colosseum's developers learned valuable insights into blockchain development, L2 chain functionality, and how to build DApps in familiar languages using [Cartesi's unique capabilities as an app-specific, optimistic rollup solution](https://medium.com/cartesi/application-specific-rollups-e12ed5d9de01).
