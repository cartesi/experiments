---
title: Global Social
description:
  "Global Social is a decentralized social protocol that leverages Cartesi's
  powerful computational capabilities to make social data transparent
  andresistant to censorship."
foundedOn: 2024-11-22
thumbnail: 'logo.png'
logo: 'logo.png'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - Social Identity
  languages:
    - TypeScript
  stacks_and_libraries:
    - Docker
    - Node.js
    - SQLite
links:
  github:
    - 'https://github.com/LI-YONG-QI/global-social'

team:
  - name: Chi LI-YONG-QI

related:
  - bugbuster
  - scribbl
  - trustmatch
---

## About Glocal Social

Using the Cartesi Framework, API route definitions and routing were handled,
along with configurations for nodes and the RISC-V architecture. Additionally,
SQLite was integrated to store posts and enable searches based on specific
conditions.

The primary operations are divided into [inspect] and [advance], which are used
for reading and writing data. Data reading supports searches based on specific
conditions and serves as the default recommendation. Data writing involves
creating posts and liking specific posts.

In the advanced API, the encoding method uses the ABI encoding format. The
already encoded bytecode is passed to the backend, which will then decode it
into the function selector and arguments. The function selector is used to
specify the action to be performed.

## What's next

Add a landing page and build a more complex algorithm as a reference for
homepage posts.
