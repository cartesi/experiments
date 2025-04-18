---
title: Bug Buster
description: A trustless bug bounty platform for Linux applications
foundedOn: 2024-09-03
thumbnail: 'logo.png'
logo: 'logo.png'
gallery:
  - image: 'screen1.png'
  - image: 'screen2.png'
  - image: 'screen3.png'
  - image: 'screen4.png'
  - image: 'screen5.png'
  - image: 'screen6.png'
  - image: 'screen7.png'
  - image: 'screen8.png'
  - image: 'screen9.png'
  - image: 'screen10.png'
tags:
  projectStage: In progress - Beta
  other_tags:
    - 'Cartesi Experiment Week'
  projectTypes:
    - Dev-Tool
  languages:
    - Go
    - TypeScript
    - Lua
  stacks_and_libraries:
    - Docker
    - NextJS
    - Vue
    - Wagmi
links:
  github:
    - 'https://github.com/crypto-bug-hunters/bug-buster'
  twitter:
    - 'https://x.com/BugBusterApp'

team:
  - name: Cláudio Silva
    discord: claudio.silva
  - name: Eduardo Barthel
    discord: edubart
  - name: Enderson Maia
    discord: enderson
  - name: Francisco de Moura
    discord: f.moura
  - name: Gabriel Ligneul
    discord: gabriel.ligneul
  - name: Guilherme Dantas
    discord: guidanoli
related:
  - housy
  - techai
  - cartenix
---

## About Bug Buster

Bug bounty programs allow developers to discover vulnerabilities in their
applications by rewarding hackers that find them. They are mostly held in the
Web2 space, and, thus, rarely provide any form of payment guarantee to
whitehats. As a result, developers are able to unfairly underpay whitehats, or
even refuse to pay them.

To solve this issue, we have developed Bug Buster—a trustless bug bounty
platform powered by Cartesi Rollups. Running inside a deterministic RISC-V
machine that boots Linux, Bug Buster accepts applications written in any major
programming language. Through a friendly web interface, anyone can submit
applications, and sponsor them with ERC-20 tokens to incentivize hackers! All
major wallets are supported. Meanwhile, hackers can test their exploits right on
the browser, without even having to sign Web3 transactions! Once the hacker
finds a valid exploit, they can finally send a transaction requesting the reward
to be transferred to their account. If, however, no one is able to submit a
valid exploit until a certain deadline, the sponsors may request a refund.

In order to be accepted, an application must be formatted in a specific way.
First, it should be compiled to RISC-V machine code. Second, it must be bundled
as a tarball compressed with xz (\*.tar.xz), together with a "start.sh" file
that serves as the entry point for the application. Then, whenever someone
submits an exploit, the back-end will run the "start.sh" file in a sandbox,
while feeding the exploit to it through the standard input stream. Bug Buster
does not enforce any specific format for the exploit. It can be in whichever
language the application submitter may prefer. For example, Lua might be
preferred for testing the Lua interpreter, while SQL might be better suited for
testing the SQLite database engine.

The back-end of Bug Buster is mostly written in the Go language, using the
Rollmelette framework, which was developed by one of our team members, Gabriel
Ligneul. In the back-end, applications are run in a controlled environment that
isolates processes, limits resources and filters system calls. This is possible
thanks to bwrapbox, a Linux sandboxing utility also developed by one of our team
members, Eduardo Barthel.

Meanwhile, the front-end is written in Typescript and uses the Next.js
framework. For interacting with smart contracts, we use Wagmi and Viem, and all
the major wallets are supported thanks to the Web3Modal library. To provide a
good UX, we have used the React components from the Mantine library. Also,
GraphQL queries are made in the front-end with the Apollo library.

Apart from back-end and front-end code, a substantial part of the codebase
focuses on testing Bug Buster with real-world applications such as Solidity,
Lua, SQLite and BusyBox. To this end, we use Docker for building these
applications to RISC-V, and Lua for writing test cases. We can interact with the
DApp through the web UI, but also through a CLI tool written in Go.

## Describe what could be next for your project?

The initial version of this project was developed in one week. During this
period, we had to design and implement the project from scratch. With this very
tight schedule, some of the features were left out for later implementation.
Below are some of those features.

- Support ENS
- Support other types of assets (Ether, ERC-721, and ERC-1155)
- Support syntax highlight on code blocks
- Add optional one-time setup phase for applications
- Add option to download bounty bundle
- Sandbox applications with Hypervisor
