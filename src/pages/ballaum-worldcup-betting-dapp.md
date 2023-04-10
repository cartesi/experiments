---
title: Ballaum worldcup betting DApp
description: Betting system for prediction of the world cup matches
logo: "H0yrMxf.png"
thumbnail: "H0yrMxf.png"
tags:
  projectStage: Proof of concept
  technology:
    - TypeScript
links:
  github:
    - "https://github.com/tuler/ballaum"
  demo: "https://ballaum.vercel.app/"
team:
  - name: Danilo Tuler
    linkedin: "https://www.linkedin.com/in/danilotuler/"
    twitter: "https://twitter.com/dtuler"
    discord: "tuler#8915"
---

# About Ballaum

Ballaum is a decentralized betting platform for sports tournaments, leveraging the power of [Cartesi](https://cartesi.io/) technology to create a secure, transparent, and user-friendly prediction system.

Initially designed for the 2022 Qatar World Cup, Ballaum is extensible and adaptable to support various sporting events with scores. With a growing interest in decentralized applications and the ever-increasing popularity of sports betting, Ballaum addresses the need for a trustworthy platform where enthusiasts can engage in predicting match outcomes in a decentralized manner.

The platform is deployed on the [Goerli testnet](https://ballaum.vercel.app/) and is open to anyone who wishes to participate in predicting match outcomes. Participants are required to deposit a small amount of GoerliETH into their DApp wallet before submitting their first prediction.

Ballaum is built with a Typescript backend and a NextJS-based frontend, providing a seamless user experience for sports enthusiasts.

# Technical Details

Ballaum's backend is developed using Typescript, which is transpiled and bundled to JavaScript using [esbuild](https://esbuild.github.io/). The frontend is also implemented in Typescript, utilizing the NextJS framework.
The shared code between the backend and frontend simplifies encoding and decoding of inputs. The project's creator started developing a Typescript framework for Cartesi DApps, tentatively called "deroll," which may eventually become a full-fledged framework.

The platform features a wallet module with a user interface, though it does not yet handle voucher execution. To integrate a web3 wallet, the developer experimented with [wagmi.sh](https://wagmi.sh/) and [rainbowkit.com](https://www.rainbowkit.com/), which offer a neat solution for wallet management.

The Ballaum platform makes extensive use of the Inspect API, but not GraphQL, resulting in suboptimal UI feedback.

Ballaum's scoring system is designed to reward participants for accurate predictions. For each match, points are awarded based on the following criteria:

- Exact result: 25 points
- Correct winner, score of winner: 18 points
- Correct winner, correct difference of goals: 15 points
- Correct winner, score of loser: 12 points
- Correct winner, but none of the above: 10 points
- Tie, but not correct score: 15 points
- None of the above: 0 points

Participants can send predictions for each match before it starts, and the tournament manager updates the match results. At the end of the tournament, the participant with the most points wins the pot. In case of multiple winners, the pot is divided among them. The winnings are transferred to the winner's DApp wallet, from where they can be withdrawn back to L1.

Improvements and future enhancements for Ballaum include refining the type system of codecs, implementing AddTournament and DeleteMatch inputs, allowing multiple predictions or results with a single input to save money while maintaining atomicity, handling voucher execution for withdrawals, utilizing GraphQL for better feedback, and incorporating transaction simulations for input validation.

Furthermore, the platform could benefit from the integration of real-time match updates, live leaderboards, and enhanced security measures to ensure a seamless and enjoyable user experience.
