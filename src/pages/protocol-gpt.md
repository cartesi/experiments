---
title: Protocol GPT
description:
  Our platform blends AI with blockchain to provide specialized GPT models,
  fostering a community-driven marketplace. It emphasizes transparency and
  scalability in DApp development, using Cartesi's Linux VM for
  blockchain-verified AI models
thumbnail: 'protocol-gpt.png'
logo: 'logo.png'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - AI/ML
  languages:
    - Python
    - TypeScript
    - Go
    - Solidity
  stacks_and_libraries:
    - Docker
    - Linux
    - Node.js
links:
  github:
    - 'https://github.com/solity-research/ethIstanbul'
team:
  - name: Mehmet Fahri Bilici
    linkedin: https://www.linkedin.com/in/mehmetfahribilici/
  - name: Ege Arikan
    linkedin: https://www.linkedin.com/in/egearikan/
  - name: Dogukan Ali Gundogan
    linkedin: https://www.linkedin.com/in/dogukan-ali-gundogan/
  - name: Cem Denizsel
    linkedin: https://www.linkedin.com/in/cem-denizsel/

related:
  - chaingpt
  - lilium
  - decentralized-air-quality-classifier
---

## About Protocol GPT

We have a login mechanism that takes wallet address and then shows WorldCoin QR.
When a user finishes the authentication, the json result is sent to our smart
contract to verify user on chain. After the verification whenever the user want
to create a protocol, if he/she is verified, the creation process is starts.

In order to validate users uniqueness we use Proof of personhood of WorldCoin.
In our first smart contract that interacts with our frontend we receive the
root, nullifierHash and the proof which was generated on the frontend. then we
use them to verify that this user is unique and interacts with us through our
frontend. after verification then we let the user send a prompt to our
personalised GPT Model. in Cartesi. This happens through Hyperlane. Our verifier
contract sends the prompt or the GPTData contract creation method via Hyperlane
to our another contract in Scroll. Scroll provides proofs for each tx thanks to
its zk-evm nature so every step until our LLM model is verifiable. Then those
messages come to our Factory Contract in Scroll and according to commands either
a new data contract is created to feed our model or we directly send our prompt
to our model.

We used huggingface models in our first trial. Due to Cartesi Linux runtime uses
risc-v architecture some of the dependencies cant be compiled. Because of that
we used LLAMA 2 cpp version. With this version ve are using llama 2 7B version
with 4 bit quantization. So we are using less memory for loading model. This
approach solved our dependency issue. Hence our current DApp which serves as
custom gpt model almost ready to deploy Cartesi Machine We are also using
inspect requests in our dapp to in order to show what information we stored so
we are ensuring transparency.

## Describe what could be next for your project?

Adding different models like image generation
