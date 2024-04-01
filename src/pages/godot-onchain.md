---
title: Godot Onchain
description:
  'Proof of Concept: running games built with Godot Engine on Cartesi for
  verifiable high scores.'
lastUpdated: Oct 20, 2023
thumbnail: 'H0y6JCx.png'
logo: 'H0Da4Np.png'
gallery:
  - image: 'godot-one.png'
  - image: 'godot-two.png'
  - image: 'godot-three.png'
  - image: 'godot-four.png'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - Games
    - Autonomous World
  languages:
    - Typescript
    - GoDot
links:
  github:
    - 'https://github.com/sweti-yeti/ethglobal-newyork-2023'
team:
  - name: Adam Watson
    discord: 'swetiyeti#0'
related:
  - ultrachess
  - dazzle
  - cartesian-battleship
---

## About Godot Onchain

This project showcases the use of Cartesi to validate leaderboard submissions in
single-player, arcade-style games. This proof of concept begins with a
browser-based 2D platformer, mechanically similar to Geometry Dash. Players
submit their high scores, along with a gameplay log, to the Godot server running
on Cartesi. The game server replays their game log in order to validate the
legitimacy of their score.

## How it's Made

First and foremost, the Godot engine is used for the browser client game and the
server that verifies high scores. The server is running on Cartesi, which
provides a way to verify high scores deterministically and publish results
directly to the blockchain. The website hosting the game client is built with
NextJS.

In order to submit high scores, players are required to sign up, which creates a
custodial wallet using Biconomy. The Players would be able to submit their high
score gasless via the Biconomy Paymaster.
