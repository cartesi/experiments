---
title: Arena Mayhem
description:
  Arena Mayhem is an exciting fighting game that let users craft their own
  gladiators and join many epic battles by inviting their friends. It's an
  auto-battler with betting and strategy involved!
thumbnail: 'a2c864869023-The_Team.png'
logo: 'a2c864869023-The_Team.png'
tags:
  projectStage: Hackathon Project
  other_tags:
    - 'Cartesi Experiment Week'
  projectTypes:
    - Games
  languages:
    - Python
    - JavaScript
  stacks_and_libraries:
    - Node.js
    - React.js
    - Ethers.js
    - Hardhat
links:
  github:
    - 'https://github.com/jplgarcia/arenamayhem'
team:
  - discord: payalpatelmalhotra
  - discord: riseandshaheen
  - discord: renan061
related:
  - housy
  - techai
  - cartenix
---

## About Arena Mayhem

In the arena, participants stake ERC-20 tokens (e.g., ETH, APE) as prizes.
Battle participants enter, and a Cartesi machine runs an algorithm to create a
JSON battle log based on fighters' stats, detailing their actions in each round.
The victorious player can then claim the prize.

The choice of Cartesi to run the battle logic is happen beacause the algorithm
can be as complicated as the devs want it to be, which could overwhelm the
Solidity language.

After the algorithm finishes the calculations and log generation, players can
watch their gladiators in action through an animation made with the react
frontend, displaying each step of the fighters attacks and the decay of their
health throughout the battle.

Once the battle ends, tokens are distributed within the application and can be
withdrawn by the winner. Arena Mayhem is your ticket to a world of exciting
battles, strategy, and the thrill of victory!

## Describe what could be next for your project?

- Both sides of the battle being able to bet.
- Multiplayer battle with each player sending a gladiator without leaking
  information about the character
- Integration of the front-end with the secondary back-end
- Gladiators as NFTs
- New types of weapons
- Lobby to search for battles
- Use of custom sprites
