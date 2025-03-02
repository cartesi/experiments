---
title: Scribbl
description:
  A ridiculously simple app where AI judges your hand-drawn doodles and ranks
  you on a global leaderboard. Scribbl uses Cartesi Coprocessor behind the
  scenes to make the results fully verifiable on-chain. The idea demonstrates
  how a fun app can leverage unbiased, decentralised and verifiable AI inference
  in online drawing contests.
foundedOn: 2025-02-19
featured: true
thumbnail: 'logo.jpg'
logo: 'logo.jpg'
gallery:
  - image: 'image1.png'
tags:
  projectStage: Release Candidate
  projectTypes:
    - Art
  languages:
    - JavaScript
    - TypeScript
    - Python
    - Solidity
  stacks_and_libraries:
    - EigenLayer
    - Docker
    - Next.js
    - Node.js
    - Tensorflow Lite
    - NumPy
links:
  website: 'https://scribbl.fun/'
  other:
    - 'https://scribblscan.netlify.app/'
  github:
    - 'https://github.com/experimentationlab/art-judge'
  twitter:
    - 'https://x.com/scribblfun'

team:
  - name: Shaheen
    discord: riseandshaheen
  - name: Bruno Menezes
    discord: brunodmenezes
  - name: Helen Imah
    discord: '@helenimah'

related:
  - bugbuster
  - drawing-dapp
  - dca-monster
---

## About Scribbl

### Technical Details

Scribbl uses a pre-trained TensorFlow Lite model to run inside the Cartesi
Machine allowing good performance in a constrained environment. The model is
trained over 100 categories of the infamous Quick Draw dataset open-sourced by
Google.

### Quick Draw Dataset

It is a collection of 50 million drawings across 345 categories, contributed by
players of the game Quick, Draw!. The drawings were captured as timestamped
vectors, tagged with metadata including what the player was asked to draw and in
which country the player was located. You can browse the recognized drawings on
quickdraw.withgoogle.com/data.

### Python Backend

We use Pillow and NumPy libraries to pre-process images received at the backend
machine. The processed image in a 28x28 resolution is then fed to the inference
to classify and output its predictions. Top 3 predictions are submitted as an
ABI encoded data to the smart contract onchain.

### Scribbl Smart Contract

We define a contract called ScribbleTaskManager that relays inputs to our
coprocessor backend and also emits the output events. It also calculates the
running average score of the user. Its public functions are available to the
frontend client to fetch the results and leaderboard scores.

### NextJS Frontend

The frontend webapp available at scribbl.fun is written in Typescript with Wagmi
library for web3 interactions. It uses Hero UI as a CSS framework.

## What's next

We want to make Scribbl the simplest and the most fun app out there. We that in
mind we want to focus on user experience as priority which includes showcase of
user data, better accuracy, more categories and login abstractions. Other simple
features that are on our mind include time based challenge and minting your
doodles as NFTs.

We're open for suggestions, reach out to us. Let's make eet happen!
