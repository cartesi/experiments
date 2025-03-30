---
title: MathCoprocessor
description:
  Cartesi Coprocessor that allows smart contracts to run math functions in
  Python
foundedOn: 2025-02-22
thumbnail: 'logo.webp'
logo: 'logo.webp'
gallery:
  - image: 'image1.png'
  - image: 'image2.png'
tags:
  projectStage: In progress - Alpha
  projectTypes:
    - Dev-Tool
  languages:
    - Python
    - Solidity
  stacks_and_libraries:
    - NumPy
    - Coprocessor
links:
  github:
    - 'https://github.com/miltonjonat/math-coprocessor'

team:
  - name: Milton Jonathan
    discord: milton.jonathan
related:
  - thinkchain
  - techai
  - drand-tooling
---

## About MathCoprocessor

Smart contracts written in Solidity often need to perform mathematical
operations that are either too resource intensive, or are simply unavailable in
Solidity. A trivial example of the latter is to perform an exponentiation with a
floating-point base (i.e., "x^y" where "x" is not an integer). This project
proposes a simple solution using Cartesi Coprocessors, that allows smart
contracts to send an arbitrary Python mathematical expression along with a
callback to be called with the ABI-encoded result. This implementation includes
support for NumPy and arbitrary ABI encodings.

<iframe width="560" height="315" src="https://www.youtube.com/embed/OGlL4JRpT1c?si=1Haabvvz9YgKVoy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## What's next

Next intended steps are to provide ways to parameterize the input mathematical
expressions. First, we would like to add variable replacement, with variables
given as extra arguments along with the main mathematical expression string.
Next, we would like to explore ways to fetch variable data using base layer
access (dehashing), e.g., to specify some contract storage slot, or data from
some event.
