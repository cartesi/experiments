---
title: Colosseum
description: Fully on-chain fighting game that pits bots against each other and allows viewers to place bets.
thumbnail: "https://iili.io/H0LuWFI.jpg"
tags:
  hackathon: true
  winner: 1st Place
  event: Hack Boston
  projectStage: Hackathon Project
  technology:
    - Python
    - ReactJS
    - Go
    - Lua
    - Cartesi Rollups
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

This project is a fully on chain bot v. bot fighting game. It seeks to solve the problem of boredom, along with the issue of crypto games that run most of their logic off the chain. We used Cartesi's optimistic rollup features to create our backend in Python and integrate a go script called Ikemen GO, which was a previously existing and open source fighting game sandbox. Through using the Cartesi Machine's ability to cross compile our code in it's RISC-V architecture, we are able to efficiently run complex game logic like Ikemen GO on the chain. Users are also able to place bets on the current fighters, demonstrated by our video below.

# Technical Details

To build this project we used knowledge of Python, React, Go, Lua scripts, JSON files, Cartesi Rollups, and API calls to the Ikemen GO game. Cartesi Rollups were integral to the functionality of our project, as we were able to have a layer of abstraction that allowed us to run the Ikemen GO logic and place bets on-chain.

We have nearly every single component of the backend built out. After spending hours attempting to solve dependency errors and downloading countless files to try to get Ikemen GO working on our Mac laptops, we were not able to allocate enough time to integrate the frontend interface that we had built. This interface consisted of a timer to count down between fights, an MP4 player to broadcast the fights, and a table that displayed a live feed of bets made on the platform.

Although we were not able to complete the frontend, we still feel as if we completed a successful project in our foray into the blockchain development space. We learned about how a L2 chain functions, and how to build DApp's in languages that we had previous experiences in using Cartesi.

# Video

<iframe width="100%" height="440" src="https://www.youtube.com/embed/fF2HKRocE60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
