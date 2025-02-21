---
title: Cartesi Lido Oracle
description:
  A coprocessor that enhances the Lido protocol by replacing trusted parties
  with provable computation. Built for Cartesi+Eigenlayer Experiment Week 2025
lastUpdated: Feb 18, 2025
thumbnail: 'logo.png'
logo: 'logo.png'
gallery:
  - image: 'image1.svg'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - DeFi
  languages:
    - Rust
    - Solidity
  stacks_and_libraries:
    - Docker
links:
  github:
    - 'https://github.com/willemolding/Cartesi-Lido-Oracle'

team:
  - name: Willem Olding
    discord: wollum

related:
  - bugbuster
  - drawing-dapp
  - dca-monster
---

## About Cartesi Lido Oracle

To correctly rebase stETH Lido needs to know the total staked ETH held by all
Lido validators, among some other things. This information lives in the beacon
state which inaccessible to smart contracts. Even if it was the gas required to
iterate over all the >1M validators makes it infeasible.

Lido currently gets around this by having trusted offchain actors compute these
values and pass them to the protocol via a 5-of-9 multisig. But they want to do
better! There is currently an open proposal (LIP-23) for submissions to build
trustless backstops for these oracles. So far there have been a number attempts
to solve this using ZK with mixed success. Of 5 proposals awarded grants to
build ZK oracles only 2 have succeeded. The main challenge being the size of the
validator set.

This project gives an alternative solution using Cartesi Coprocessors and
Eigenlayer. It solves a real and current problem faced by the largest DeFi
protocol in the world. After this hackathon I hope it will be considered as a
candidate for a further Lido grant.

## What's next

Interested in seeking funding from Lido to integrate the oracle and help secure
the Lido protocol once Cartesi Coprocessors are production ready
