---
title: AI United
description:
  A Football-like Game where the players in the field are actual bots. Human
  players can code them, buy them to create a club, or maybe they want to hold
  shares of the clubs, or even manage the teams. A whole world of football!
lastUpdated: Nov 26, 2024
thumbnail: 'logo.jpeg'
logo: 'logo.jpeg'
gallery:
  - image: 'image1.png'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - Games
  languages:
    - Rust
    - TypeScript
  stacks_and_libraries:
    - Svelte
links:
  github:
    - 'https://github.com/wighawag/ai-united'

team:
  - name: Ronan Sandford
    discord: wighawag
    telegram: wighawag
    linkedin: https://www.linkedin.com/in/ronansandford

related:
  - bugbuster
  - drawing-dapp
  - dca-monster
---

## About AI United

The core component of the game is Cartesi, a rollup that let you execute and
proof (optimistically) potentially long and intensive program. We use Rust as it
allowed us to achieve multiple things not really possible otherwise:

    rust wasmer library allow us to execute wasm inside the cartesi machine. Furthermore wasmer can itself be compiled to wasm, allowing us to replicate the machine right in the browser!
    wasmer library also support metering, which allow us to ensure bots cannot ddos the system, ensuring fair gameplay. This is a crucial feature not present in existing programming game as far as we know
    wasm support allow bots to be written in multiple languages.
    rapier3d is a rust library we use to implement the physics of our game. We could not resist make use of the 3d environment it enables

We also use typescript + svelte to implement the frontend We use three + threlte
for 3d rendering

## What's next

Next is to allow for team play and connect to a staking contract and launch it
on mainnet The idea is then to add club mechanics where human player can
purchase/ pay bots/bots creator and organise cups Cartesi is a perfect fit for
the game as it allow the game simulation to involve complex real time physics,
yet the club management allow human player to play at a higher level
