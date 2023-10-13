---
title: Scam Likely
description:
  Allow a user to "block" an address by adding it/them to a file which lists
  flagged EVM addresses.
thumbnail: 'H0y6JCx.png'
logo: 'H0Da4Np.png'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - Social Identity
  languages:
    - Python
links:
  github:
    - 'https://github.com/deapinkme/ScamLikely/tree/main'
team:
  - name: Marija Stojanovski
    discord: 'maremac#0'
  - name: Andrea Stojanovski
    discord: 'Deapinkme#6887'
  - name: Victor Stojanovski
    discord: 'null#null'
related:
  - biometrics-classifier
---

## About Scam Likely

Using Cartesi to write a Python script which checks an EVM address. The given
address is compared against a file containing a list of previously flagged
delinquent addresses. If the address is found, the user is notified, if not,
they are prompted to either flag the address or proceed.

## How it's Made

Used Cartesi's sample rollup GitHub repo to create and run an example and test
our environment. Changes are mostly made to the Python file, examples are found
at:
[https://github.com/cartesi/rollups-examples](https://github.com/cartesi/rollups-examples).
The example used was erc20.py. Used Docker (as listed in instructions). Locally
and publicly tested code.
