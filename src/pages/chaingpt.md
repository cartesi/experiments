---
title: ChainGPT
description: "Decentralised & verifiable chat AI, backed by the blockchain: a port of Alpaca LLM model leveraging the Cartesi app-specific rollups"
thumbnail: "H0y6JCx.png"
logo: "H0Da4Np.png"
gallery:
  - image: "1.png"
  - image: "2.png"
  - image: "3.png"
tags:
  event: ETHGlobal Lisbon
  winner: 2nd Place
  projectStage: Hackathon Project
  technology:
    - C++
    - alpaca.cpp
links:
  website:
    - "https://www.ethglobal.com/showcase/chaingpt-and-accountability-for-ai-agents-doquk"
  github:
    - "https://github.com/dhood/rollups-examples"
team:
  - name: Deanna Hood
    twitter: "https://twitter.com/Deanna_Hood"
    discord: "deanna (she/her)#3984"
---

# About ChainGPT

If you ask [ChatGPT](https://openai.com/blog/chatgpt) how to run an instance of itself on the blockchain, until recently, the answer would be along the lines of "Um, you know smart contracts don't work like that, right?"

Everything changes with [Cartesi Rollups](https://docs.cartesi.io/cartesi-rollups/overview/). Powerful, distributed non-web3 applications are now possible - and ChainGPT is here to test the boundaries.

ChainGPT is an open, verifiable and decentralised implementation of a chatbot AI agent similar to ChatGPT, using [Stanford's Alpaca Large Language Model](https://crfm.stanford.edu/2023/03/13/alpaca.html) (LLM).

Why do we need cryptographic truth when using [LLMs](https://en.wikipedia.org/wiki/Large_language_model)? Because LLMs always give an answer, and don’t actually know what’s true.

Examples:

- Cryptographic truth ensures accountability for AI Business Agents (chatbots) and their service providers, because in the event of a customer claim against an AI chatbot, the blockchain can be leveraged to see who is at fault.
- Auditing and improving AI agents in regulated industries.
- Guaranteeing safety of children when using Education chatbots, and wherever society needs certainty that models haven't been tampered with.

ChainGPT is a 🤯 [C++](https://en.wikipedia.org/wiki/C%2B%2B) application 🤯 that is guaranteed to give the trusted, expected result - providing economic security for businesses that leverage AI chatbots. The security of ChainGPT's output comes from it being run on multiple "validator nodes" (which are just regular computers in anyone's house). The fact that ChainGPT results are reproducible means that together these validators ensure the correctness of each response. These results can be referenced to settle claims against the behaviour of chat bots.

Users can interact with ChainGPT knowing it's backed by the security of the blockchain. This is because ANY discrepancy between what two or more validators say the result should be, are mediated on the blockchain. In the absence of any discrepancies, the blockchain is still being used to compare results, but it's not expensive. Combining this with the long-running audit chain of previous ChainGPT interactions is what allows it to provide auditing and accountability for AI chatbots in all fields.

# How it's Made

ChainGPT is the fusion of two main technologies: an existing pure C++ application to run Stanford's Alpaca large-language AI model (call alpaca.cpp), and the Cartesi Machine, which allows for nearly any app that can be run in a linux RISC-V architecture to be decentralised on the blockchain.

Alpaca.cpp, however, does not currently support RISC-V architecture (ask me how I know). Porting it so that the fusion of these technologies can happen is the technical novelty in this project. Indeed, this technical difficulty was the motivation for the project in the first place: while ChainGPT is a tool that can be USED by people of all ages, all professions, living in any country, to develop it requires a specific skill set at the intersection of web3 and machine learning.

The community contributions that have come from the development of ChainGPT are:

- The use of Cartesi in an entirely new (entirely non-crypto) context: the future of education.
- Lower barrier to entry for new Cartesi developers:
  - 3 documentation PRs including troubleshooting tips
  - 1 feature enhancement to the existing C++ demo
  - 1 update to the demos to use up-to-date cross-compilation techniques
- Social awareness of the ability for developers from outside of the crypto community to develop applications that leverage the blockchain for security.

"Blockchain-backed ChatGPT, is that even possible?!" ChainGPT proves that with Cartesi: yes, yes it is. 🔥

<iframe width="560" height="315" src="https://www.youtube.com/embed/WfxuqJ8-msM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
