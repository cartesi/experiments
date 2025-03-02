---
title: BubbleWars
description:
  Bubblewars is a fully on-chain MMO where $ETH is mass and momentum is
  conserved. Users grow their Bubbles on an infinite canvas by absorbing $ETH
  from their opponents.
foundedOn: 2024-04-12
thumbnail: 'logo.jpg'
logo: 'logo.jpg'
tags:
  projectStage: Stable release
  projectTypes:
    - Games
  languages:
    - TypeScript
    - Solidity
  stacks_and_libraries:
    - Docker
    - Node.js
links:
  github:
    - 'https://github.com/BubbleWars/app'
  twitter:
    - 'https://twitter.com/Bubblewars_io'

team:
  - name: Zach Prater
    twitter: 'https://twitter.com/zach1422'
  - name: Klein
    twitter: 'https://twitter.com/c_klein'
  - name: Glockchain
    twitter: 'https://twitter.com/glockchain'
  - name: Puddi
    twitter: 'https://twitter.com/__puddi__'

related:
  - ultrachess
  - cartesi-werewolf
  - life
---

## About

All inputs are transactions sent to the Layer 1 without sequencing (currently a
local anvil blockchain serves as our L1 for quick iteration and CI/CD. But could
of easily been deployed to Sepolia, Holesky Redstone or some other testnet)
(Also we get to faucet unlimited anvil ETH to burner wallets). Upon each user
input/transaction (using burner wallets at the moment) the rollapp runs the
simulation of the game physics from the timestamp of the last submitted
transaction up to the timestamp of the most recently submitted transaction. So
the gameplay physics is simulated in real time, but in an input driven manner
(because of the nature of blockchain). So to get a real time feel, we
implemented a state server (or indexer). This is a websocket server that listens
to the L1 for transactions to the rollup contract, simulates transactions as
soon as they are added to a block and then syncs clients with the appropriate
game state that exists within the rollapp. Users can choose to use our state
server (for better UX) or simulate game state within their own client ( or if
even just wait for the rollup to publish state changes back to the L2, but
that'll take slightly longer). The state server allows for a seamless
web2-equivalent user experience. (very vital)

So the hurdle was implementing a fully on-chain REAL-TIME game where the
smallest smallest possible timestep within the game loop is about 0.03 seconds
and syncing all of the clients in a seamless manner. (Your inputs are of course
bottlenecked by the layer 1's block speed, but dedicated sequencing can change
that). (And thanks Cartesi Machine for the computing power)
