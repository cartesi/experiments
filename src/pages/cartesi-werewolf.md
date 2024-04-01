---
title: Cartesi Werewolf
description:
  We implemented a fully decentralized version of the werewolf game that runs on
  Cartesi Rollups, guaranteeing transparent game logic and a deterministic game
  result that anyone can validate by running a Cartesi node for it.
lastUpdated: Dec 11, 2023
thumbnail: '816c6a95bd8b-wolf.jpg'
logo: 'logo.jpg'
tags:
  projectStage: Hackathon Project
  other_tags:
    - 'Cartesi Experiment Week'
  projectTypes:
    - Games
  languages:
    - Python
  stacks_and_libraries:
    - Docker
    - Hardhat
    - Node.js
links:
  github:
    - 'https://github.com/stephenctw/cartesi-werewolf-example/tree/main'
team:
  - name: Zehui Zheng
    discord: 'zehuizheng'
  - name: Stephen Chen
    discord: 'stephenctw'
  - name: Karmen Truong
    discord: 'karmentruong'
  - name: Zach Prater
    discord: 'zach1422'

related:
  - dazzle
  - cartesian-battleship
  - godot-onchain
---

## About Cartesi Werewolf

Our implementation is a simple proof-of-concept of the integration of werewolf
game and Cartesi Rollups infrastructure. The simplified game flows as
follows: 0. Since some rounds of communications need to be encrypted, players
need to first generate their RSA key pairs, and send the public keys on-chain.

1. Once enough players join the game (have their pk sent on-chain), the back-end
   randomly decide who to be the moderator and publicly announce it.
2. Each player keeps inspecting the backend to find out whether itself is the
   moderator or not. If yes, then the moderator will randomly decide who to be
   werewolf and villagers, encrypt each role with the corresponding role
   player’s public key and send them on-chain. So each player will only know its
   own role by decrypting using its private key.
3. Game begins by moderator announcing the “night falls”. Werewolf decides who
   it would kill. Werewolf and villagers all need to send out (encrypted)
   messages so werewolf doesn’t get caught by being the only one sent out a
   message.
4. Moderator announces “day breaks” and who was killed. Villagers (and werewolf)
   who are still alive vote for the most likely werewolf player and send
   publicly on-chain.
5. Moderator inspects the backend until all votes received by the backend. If
   the voting finishes the game, moderator sends publicly on-chain that the game
   finishes. Otherwise, another villager was voted out and the game continues
   with step 3. After the game finishes, the moderator reveals all players’
   secret keys so all game steps are reproducible and verifiable.

## Describe what could be next for your project?

The current implementation simplifies a lot of the game rules. So the next step
could be to enrich game rules for more fun. The front-end could improve a lot to
make the game flow more smooth. Need to work on the incentives for people to
play this decentralized game rather than the more mature centralized version.
