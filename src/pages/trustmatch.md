---
title: TrustMatch
description:
  Matchmaking in e-sports is the process of pairing players in teams against
  each other in a fair and competitive manner. Matchmaking systems are crucial
  in ranked and casual play, ensuring that games are challenging yet enjoyable.
  So, if done in a centralized manner, the matches can be easily biased, and
  that's why we propose this project, a matchmaking system using Cartesi
  Coprocessor.
foundedOn: 2025-02-18
thumbnail: 'logo.jpg'
logo: 'logo.jpg'
tags:
  projectStage: Proof of concept
  projectTypes:
    - Games
  languages:
    - Python
    - Solidity
  stacks_and_libraries:
    - EigenLayer
links:
  github:
    - 'https://github.com/arthuravianna/matchmaking_coprocessor/tree/main'

team:
  - name: ZacPrater
    discord: Zach1422
    twitter: https://x.com/ZacPrater
  - name: Arthura Vianna
    discord: arthurvianna
    twitter: https://x.com/arthura_vianna

related:
  - bugbuster
  - openquest
  - dca-monster
---

## About TrustMatch

We implemented the OptMatch, a generalized, iterative, two-stage, data-driven
matchmaking framework that requires minimal product knowledge since it only uses
match win/lose/score results. The two stages are offline and online. The offline
phase prepares the protocol to predict ""good"" matches, and the online phase
effectively does matchmaking. This means that the coprocessor runs the Online
phase, and the offline phase is used to build the coprocessor.

One advantage of the chosen framework is that it is applicable to most gaming
products. The framework's precision and generic aspect led us to envision this
solution as SaaS (Software as a Service), where a game, decentralized or not,
can leverage a decentralized matchmaking system.

OptMatch The framework focuses on ""arena"" games with KVSK players, such as
League of Legends and DOTA. It builds relations between the heroes and players
to achieve good accuracy. The key advantages of the framework are:

applicable to most of gaming products, fast and easy to implement minimal
knowledge about the products and data required robust to data drift Offline
extracts two interpersonal relations for representing and understanding tacit
coordination interactions among players; learns the representation vectors to
incorporate the high-order interactions; trains a model(i.e., OptMatch-Net) to
encode team-up effect and predict the match outcome; Online (Coprocessor)
leverages the representation vectors of players and OptMatch-Net model to
maximize the (predicted) gross utilities for the queuing players

<iframe width="560" height="315" src="https://www.youtube.com/embed/HgkOu1SVhyw?si=KziSsxewKaMMw5e5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br/>
<br/>

## What's next

Need to turn it into a Open Source SaaS for Game Founders to use
