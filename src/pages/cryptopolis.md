---
title: Cryptopolis
description:
  Cryptopolis brings back the original city simulator that started it all in
  1989 to the crypto era. Build a city using the same game engine but with real
  economics. SimCity was launched back in 1989 developed by the legendary game
  designer Will Write. In 2008, the engine C code was ported to C++ and released
  as free software under the GPL-3.0-or-later license, renamed to Micropolis for
  trademark reasons.
lastUpdated: Mar 9, 2024
thumbnail: 'logo.png'
logo: 'logo.png'
gallery:
  - image: 'screen1.png'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - Games
  languages:
    - C++
    - HTML
    - JavaScript
    - TypeScript
  stacks_and_libraries:
    - NextJS
    - Node.js
    - ReactJS
    - Sunodo
links:
  github:
    - 'https://github.com/tuler/cryptopolis'
team:
  - name: Danilo Tuler
related:
  - cartesian-battleship
  - cartesi-warewolf
  - nebula-duel
---

## About Cryptopolis

Cryptopolis uses the exact same C++ engine of Micropolis, the open source
version of SimCity Classic.

The first step was to build the engine to the RISC-V target architecture, so it
can run inside a Cartesi Machine. The code builds successfully unmodified. One
small addition to the original code was minimalist Node.js binding for the
engine, so it could be used by a Node.js application.

The second step was to developed a Node.js application that uses the engine to
run the game simulation as a Cartesi Rollups application. That also includes
implementing an integration of the game economy with a ERC-20 token bridged from
Ethereum.

The third step was to implement a new Web UI for the game, using a myriad of
libraries, like React, Next.js, viem, wagmi, urql, PixiJS, D3, Mantine, and
others. The UI includes screens for bridging ERC-20 from Ethereum to power the
game economy.

## What's next

Cool game that can be polished and deployed to mainnet
