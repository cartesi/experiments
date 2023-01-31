---
title: Cartesian Battleship
description: Fully on-chain battleships game
logo: "https://iili.io/H0D4hej.md.jpg"
thumbnail: "https://iili.io/H0DUczB.md.jpg"
gallery:
  - "https://iili.io/H0DUczB.jpg"
  - "https://iili.io/H0pyNmQ.jpg"
  - "https://iili.io/H0y9ujV.jpg"
  - "https://iili.io/H0yJHzl.jpg"
  - "https://iili.io/H0yJeI4.jpg"
  - "https://iili.io/H0yd6PI.jpg"
  - "https://iili.io/H0ydpol.jpg"
  - "https://iili.io/H0y22Se.jpg"
  - "https://iili.io/H0y3nmG.jpg"
  - "https://iili.io/H0y3cmb.jpg"
  - "https://iili.io/H0y3ELQ.jpg"
  - "https://iili.io/H0y3h21.jpg"
  - "https://iili.io/H0y3ips.jpg"
  - "https://iili.io/H0yFlat.jpg"
tags:
  projectStage: In progress - Pre-Alpha
  technology:
    - Cartesi Rollups
    - Python
    - Node.js
    - ReactJS
    - TypeScript
    - Ethers.js
    - MetaMask
    - TailwindCSS
    - MongoDB
links:
  github:
    - "https://github.com/WeAreProductive/CartesianBattleships"
    - "https://github.com/WeAreProductive/CartesianBattleshipsUI"
    - "https://github.com/WeAreProductive/CartesiAutomation"
  demo: "https://play.cartesianbattleship.com/"
team:
  - name: Dimitar Angelkov
    linkedin: "https://www.linkedin.com/in/angelkov/"
    discord: "dimitar#3019"
  - name: Lachezar Gorchev
    discord: "LA40#9971"
  - name: Milena Tomova
    linkedin: "https://www.linkedin.com/in/milena-tomova-543108106/"
  - name: George Georgiev
    linkedin: "https://www.linkedin.com/in/jorogeorgiev/"
---

# About Cartesian Battleship

This is a fully decentralized / on-chain version of Battleships. The goal is to sink boats on the opponents' board without seeing them. The board configuration is encrypted and sent when the game begins so that no one can see the board but they also can’t lie about what was the initial setup of the ship’s positions.

# Gameplay

- Player creates game by positioning fleet on the board, game id is generated
- Second player joins the game by positioning fleet on the board
- Players send guess coordinates on each turn
- Games continues until one players fleet is fully guessed (shot down)
- When game ends the result is updated and the winner is announced

![Game Play](https://iili.io/H0bqu5u.jpg)

<iframe width="100%" height="440" src="https://www.youtube.com/embed/l6TMQuJB53E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br/>
<br/>

# Technical Details

![Architecture](https://iili.io/H0bqD7e.jpg)

### Instant Server

In the Battleship game we are using the Cartesi rollup as a game server and every player turn is sent as a transaction through the blockchain. We have encountered a problem with this approach in cases where the network is slow then every player turn has unacceptable lag. We came with the solution to route all the time critical communication through an external fast server that is not on the blockchain at all. This is a concept that is called “state channel” by Cartesi. We come with our implementation which we call “Instant server”, it is built with Node.js and MongoDB. Currently the messaging goes over HTTP/HTTPS but different protocols such as Web Sockets might be also supported.

The Instant server has the following purposes:

1. To just deliver messages between players in the fastest possible way
2. To organize the communication in containers so the players may send messages between themselves only in the context of a certain game (in similar projects this could be called channel, room, group, etc.)
3. To apply additional custom business logic to validate the player messages; in this case it is programmed to enforce the rules of the Battleship game but it might be repurposed for other applications

![Instant Server](https://iili.io/H0bBBpa.jpg)

<iframe width="100%" height="440" src="https://www.youtube.com/embed/MjHe7jyyxvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br/>
<br/>

### MiniBlockchain

With the introduction of the Instant server the communication between the players is moved outside the blockchain therefore it can no longer be trusted. At the end of the game both players return to Cartesi rollup for game verification by providing the entire history of their communication that happened on the Instant server. However there is no guarantee that any player has not forged their own version of history and there is no way to tell who is right and who is wrong. In order to solve this problem we came up with a concept called “MiniBlockchain”. This method allows the players to sign every message and include the signature of the previous message (sent by the other player) and this way the entire communication history is formed as a blockchain of its own that cannot be changed or forged by any of the players. By having both players’ public keys the authenticity of the communication history can be easily verified. This MiniBlockchain is formed at client level (it has nothing to do with any real blockchain network) and then it is provided to the Cartesi rollup for verification.

- supports chaining using hash or user signatures
- supports verification
- supports key pair generation
- written in JavaScript and works on Node.js using its crypto library

The purposes of the MiniBlockchain concept are:

1. to provide means of securing and granting authenticity of communication history or similar sequence of messages or events sent by untrusted parties in an untrusted environment
2. to provide methods for verification
3. to provide support library for different platforms

# What's next

In the near future, we imagine seeing multi-player versions, or versions with a variety of customized rules. For example, players could decide to alter the size of the board, change the kinds of ships they’re allowed to play with, add additional submarines, and create special boats with specific powers, such as taking 2 hits on each specific section before they blow up, or bombs that blow up two squares at a time.

# Read more

- [Groundbreaking Blockchain OS Projects — Decentralized Battleship Game.](https://medium.com/cartesi/groundbreaking-blockchain-os-projects-decentralized-battleship-game-ba1b81a52e61)
