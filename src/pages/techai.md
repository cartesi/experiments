---
title: Teach AI
description:
  The application helps to curate high-quality datasets by providing a framework
  to incentivize RLHF, with the LLM being fully verifiable and hosted on-chain.
foundedOn: 2023-10-20
thumbnail: 'H0y6JCx.png'
logo: 'H0Da4Np.png'
gallery:
  - image: 'teachai-one.png'
  - image: 'teachai-two.png'
  - image: 'teachai-three.png'
  - image: 'teachai-four.png'
  - image: 'teachai-five.png'
  - image: 'teachai-six.png'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - AI/ML
  languages:
    - Python
  stacks_and_libraries:
    - LLM
    - Graph
links:
  website: 'https://teachai-ethglobalny.vercel.app/'
  github:
    - 'https://github.com/teachAI-ethglobal-nyc-2023/teachai'
  demo: 'https://teachai-ethglobalny.vercel.app/'
team:
  - name: Denver Baumgartner
    twitter: 'https://twitter.com/denverbaum'
    discord: 'denverb#0'
  - name: Kirill Igumenshchev
    twitter: 'https://twitter.com/kirill_igum'
    discord: 'kirilligum#0'
  - name: Julio Cruz
    twitter: 'https://twitter.com/JulioMCruz'
    discord: 'juliomcruz#0'
related:
  - chaingpt
  - deml
  - biometrics-classifier
---

## About Teach AI

The application allows the the user to submit instructions and queries to an AI
chat interface, the smart contract acts as a middle-man between the user and
hosted (centralized unsecured or Cartesi) LLM. The user can rate two responses
to their prompt, creating an incentivized system to curate high-quality RLHF
data. The user pays a query fee for the initial prompt and receives a rebate for
providing feedback on the responses. All data is tracked on-chain, indexed by
The Graph, and with the ability to offer state checks of the model through
Cartesi. As the model is tuned, datasets used for tuning can be uploaded to
IPFS, and verified by The Graph, and checkpoints from Cartesi can be recorded in
the smart contract, providing a fully transparent lineage of LLM evolution.

## How it's Made

The application was developed using the Scaffold ETH and WAGMI libraries for
blockchain functionality. Additionally, we employed The Graph and Cartesi
libraries. For the front-end technology, we utilized React JS along with
Biconomy and Worldcoin. The application allows the user to recharge their
account using fiat.
