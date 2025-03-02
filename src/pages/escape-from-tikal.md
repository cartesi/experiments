---
title: Escape from Tikal
description:
  This is a cooperative boardgame in which the Player 2 is an LLM-powered AI. As
  we put the player 2 AI logic inside the Cartesi co-processor, players into a
  championship have transparency and verifiability on the fact that the player
  that cooperated with them didn't collude with another team to perform poorly
  and that every player has access to the same capable AI, ensuring fairness.
foundedOn: 2025-02-18
thumbnail: 'logo.jpeg'
logo: 'logo.jpeg'
gallery:
  - image: 'image1.png'
  - image: 'image2.jpeg'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - Games
  languages:
    - Python
    - TypeScript
    - Solidity
  stacks_and_libraries:
    - EigenLayer
    - Docker
    - Next.js
    - React.js
    - Node.js
    - Linux
links:
  github:
    - 'https://github.com/cf-cartesi/Escape-From-Tikal'

team:
  - name: Carlo Fragni
    discord: '@carlofragni'
  - name: Lyno Ferraz
    discord: '@fergo6'
  - name: Bruno Maia
    discord: '@bruno.maia'

related:
  - thinkchain
  - cartesi-super-soccer
  - trustmatch
---

## About Escape from Tikal

We developed a deterministic game engine in Python that is used both to execute
the game while it's being played (inside an offchain backend) and verified
(inside the Co-processor Cartesi Machine). The flow starts with a challenge
being created in the DApp smart contract, locking a prize that can be claimed by
the player with the highest score after the challenge period ends. After that,
the challenge it is available in the front end to be played. Selecting it
requests the game map to the Python offchain backend, which generates it in a
deterministic fashion using the challenge ID as a seed. The player then writes a
word in the form available in the frontend and it's sent to the offchain
backend, where the game engine calculates all tiles where it can be placed along
with the neighboring words of every valid tile. The word groups are sent to the
Phi3-mini-4k LLM with a prompt requesting which word group is the closest
related to the provided word. Once the LLM provides a response, the game engine
moves to a tile neighbouring the word group chosen by the LLM (if there is more
than one option, it's chosen based on a random value generated using the board
state as a deterministic seed) and evaluates the game rules according to the
content of the tile. The player chooses a new word and that goes on until either
they escape the maze or die. Once the game is completed, the words played are
submitted onchain along with the challenge ID, and the Co-processor uses the
same game engine to verify the match and submit the score onchain. After the
challenge period is over the player with the highest score can withdraw the
prize associated with the challenge.

## What's next

Improve the fontend (specially aesthetics), create new game modes and tile
kinds.Add support to other languages.
