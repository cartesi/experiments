---
title: ThinkChain
description:
  On-chain service that enables smart contracts to perform verifiable large
  language model (LLM) inference.
foundedOn: 2025-02-18
featured: true
thumbnail: 'logo.jpeg'
logo: 'logo.jpeg'
gallery:
  - image: 'image1.png'
  - image: 'image2.png'
  - image: 'image3.png'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - AI/ML
  languages:
    - Python
    - TypeScript
    - Solidity
  stacks_and_libraries:
    - EigenLayer
    - Docker
    - React.js
    - Node.js
    - MetaMask
    - DeepSeek
    - rainbowkit
links:
  github:
    - 'https://github.com/guidanoli/thinkchain'

team:
  - name: Eduardo Bart
    discord: edubart
  - name: Felipe F. Grael
    discord: felipefg
  - name: Guilherme Dantas
    discord: guidanoli

related:
  - bugbuster
  - trustmatch
  - cartesi-super-soccer
---

## About ThinkChain

ThinkChain provides access to a variety of popular LLMs, such as DeepSeek-R1,
DeepScaleR, Qwen2.5 and SmolLM2. A simple Solidity interface makes it easy for
smart contracts to construct prompts and decode replies entirely on-chain.
Completion requests are charged in Ether.

Our project addresses three critical challenges in blockchain-based AI
integration:

1. Scalability

Traditional on-chain AI computation faces severe scalability limitations due to
the computational overhead. We solved this through EigenLayer co-processors,
where network operators execute computations off-chain, significantly reducing
the blockchain resource burden while maintaining decentralization.

2. Integration

Directly porting existing AI implementations to Solidity is impractical due to
the EVM's computational constraints. However, by utilizing Cartesi's RISC-V
virtual machine with Linux compatibility, we can execute deterministic AI
inference for LLM models using traditional software off-chain and expose its
results in EVM smart contracts.

3. True Decentralized Verification

Current blockchain AI projects often compromise on decentralization through
various trust assumptions:

- Some rely on Trusted Execution Environments (TEEs), requiring trust in third
  parties
- Others use zkTLS, which still involves trusting external entities
- Many solutions don't address trust verification at all

Our solution provides robust verification without centralized trust points,
maintaining the core promise of blockchain technology while enabling advanced AI
capabilities.

This combination of features makes our project particularly valuable for smart
contracts that would benefit from on-chain access to LLMs where verification and
trust are critical. Examples of use cases include AI agents, AI-assisted
decision-making, data analysis, and content generation.

It is worth mentioning that we have run into some challenges during the
development of ThinkChain during the Cartesi x EigenLayer Experiment Week.
Integrating diverse technologies (React frontend, Python backend, and Solidity
smart contracts) presented significant challenges. While our team had strong
expertise in Solidity, Python, and LLM models, our limited frontend experience
caused delays. The complexity of learning multiple technologies can be
particularly challenging for newcomers during hackathons.

We also encountered issues with large machine snapshots (13GB) with coprocessor,
where publishing the machine was too slow and occasionally failed with timeouts
and other errors. We worked around this by making multiple publish attempts
until successful. Furthermore, we experienced high disk usage (up to 100GB)
because the coprocessor maintained multiple copies of machine instances (.tar,
.gnutar, image/, .car, docker images). Some team members were unable to run the
full machine due to excessive disk space consumption.

## What's next

We have several future improvements in our backlog:

- Offload matrix multiplication operations, which would greatly improve
  performance and reduce costs for users;
- Make the completion request cost calculation more realistic, taking into
  consideration base layer transaction fees, infrastructure costs, among other
  factors;
- Implementing an explorer web UI for visualizing past completion requests and
  inferences
- Support payments in ERC-20 tokens
- Implement a proof-of-concept application that encodes prompts and decodes
  responses entirely on-chain
