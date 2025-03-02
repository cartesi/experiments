---
title: OpenQuest
description:
  OpenQuest is a platform that helps projects track, engage, and grow their
  communities through fun and interactive Quests.
foundedOn: 2025-02-18
thumbnail: 'logo.jpg'
logo: 'logo.jpg'
gallery:
  - image: 'image1.jpg'
tags:
  projectStage: In progress - Alpha
  projectTypes:
    - Other
  languages:
    - Rust
    - TypeScript
    - Solidity
  stacks_and_libraries:
    - MetaMask
    - Next.js
    - EigenLayer
links:
  demo: 'https://open-quest-xi.vercel.app/'
  github:
    - 'https://github.com/Nonnyjoe/OpenQuest'

team:
  - name: Helen
    discord: hellenstans
    twitter: https://x.com/hellenstans
  - name: Evans Okoli
    discord: evans007
    linkedin: https://www.linkedin.com/in/okoli-evans/
  - name: Samuel Babalola
    discord: _asiwaju
    linkedin: https://www.linkedin.com/in/samuel-babalola-2955431b7/
  - name: Idogwu Chinonso
    discord: nonso.build
    linkedin: https://www.linkedin.com/in/idogwu-chinonso/

related:
  - bugbuster
  - drawing-dapp
  - dca-monster
---

## About OpenQuest

OpenQuest leverages a Rust-based Cartesi Coprocessor program running on
EigenLayer to handle complex grading, reward calculations, and leaderboard
updates in a verifiable and deterministic manner. A Rust Actix-web server
automates critical backend processes, including managing user registrations,
sending email notifications, and temporarily holding quiz responses before final
submission to the Coprocessor. The platform utilizes Solidity smart contracts,
including a Factory contract that deploys dedicated protocol-specific contracts
for Quest management, reward distribution, and leaderboard tracking. Cartesi’s
Coprocessor ensures offchain computations are trustlessly verified onchain,
enabling fair scoring and automated reward distribution without compromising
scalability or decentralization.

Through a combination of all these, we are able to provide a system for helping
protocols engage, track and also incentivise participants, while also helping
these developers maintain a verifiable online Cread.

## What's next

For next steps we're looking to properly polish what we have now, add a couple
more features then push to mainnet.

In terms of value to the Cartesi ecosystem, we believe this project could be
helpful in a lot of ways like supporting existing programs like the DevAd
podcast by hosting quizes after each podcast to check users understanding and
also participation, we could also help host certain events like hackathons and
also experiment weeks.

Combined with our leaderboard tracking system, we believe we could offer Cartesi
Ecosystem a stable way to track, measure and also incentivize users
participation in the ecosystem.
