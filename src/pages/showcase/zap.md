---
title: zaP!
description: Make blockchain anon, private and fun again! Hiding easter eggs and logic bombs across blockchains in autonomous Smart Contracts
thumbnail: "https://iili.io/H0bfRMN.png"
logo: "https://iili.io/H0bfRMN.png"
gallery:
  - "https://storage.googleapis.com/ethglobal-api-production/projects%2Fyxuj7%2Fimages%2Fzap-dev-triggers-dark-mode.png"
  - "https://storage.googleapis.com/ethglobal-api-production/projects%2Fyxuj7%2Fimages%2Fzap-mockup-01.png"
  - "https://storage.googleapis.com/ethglobal-api-production/projects%2Fyxuj7%2Fimages%2Fzap-mockup-02.png"
  - "https://storage.googleapis.com/ethglobal-api-production/projects%2Fyxuj7%2Fimages%2Fzap-mockup-03.png"
  - "https://storage.googleapis.com/ethglobal-api-production/projects%2Fyxuj7%2Fimages%2FzaP_main_function.drawio.png"
  - "https://storage.googleapis.com/ethglobal-api-production/projects%2Fyxuj7%2Fimages%2FzaP_read_queries.drawio.png"
tags:
  hackathon: true
  winner: 3rd Place
  event: ETH San Francisco
  projectStage: Hackathon Project
  technology:
    - Cartesi Rollups
    - Python
    - Tellor
    - XMTP
links:
  website:
    - "https://ethglobal.com/showcase/zap-yxuj7"
  github:
    - "https://github.com/ffdfyjkgkgfork/zero-awareness-protocol"
  demo: "https://zero-awareness-protocol.vercel.app/"
team:
  - name: German Abal
    twitter: "http://twitter.com/ariutokintumi"
    discord: "ariutokintumi#0001"
  - name: Santiago Ortega Mirón
    twitter: "http://twitter.com/Santiag00477836"
  - name: Wendy Yupa
    twitter: "http://twitter.com/YupaWendy"
    discord: "Wendy#7515"
  - name: C T
---

# About zaP!

The zaP! (zero awareness protocol) let any Smart Contract be autonomous and act guided by obfuscated triggers that will look for some activity in any blockchain to do some pre-configured or even dynamic obfuscated on-chain actions.

These triggers can be any transaction parameter (matched by regex) and can use a set of synchronic or even asynchronous actions guided by an amount of blocks but that can happen in one or more blockchains simultaneously.

This makes it impossible to track: What, How and Who is making this autonomous Smart Contract do whatever is planned to.

There is many use cases for the technology, some very sensible while others more gamified, in example:

- Dynamic Trading Contracts.
- Easter Eggs rewards for community engagement with some tech.
- Access Control.
- Red button government multilateral actions.
- Intelligence communication.
- Logic Bombs.

# Technical Details

We had many challenges to accomplish our goals, first of all is the security level in all the involved communications as much as possible so we had to build the POAR (Proxy Obfuscation for API Requests).

This POAR is a Python service that can be used by anyone to receive an API request for an Optimistic Oracle (i.e. Tellor) and complete the API request to the analytics data source (blockchain blocks transaction information, i.e. Dune), encrypt the data and send it back to the Oracle to be finally received, decrypted and analyzed by the trigger function in the autonomous Smart Contract.

To be compliant with the Optimistic Oracle protocol the Smart Contract has a read checkOracleData; function where you can verify if an encrypted message is valid or not (success;/error;), being this enough for that purpose.

The triggers work with a ruleset of regex expressions that will let the programmer write what is expecting to find in the chain to execute different functions, everything obfuscated. Our PoC follow this basic standard:

Trigger specification One per line preceded by "tN-" where N is the id of the trigger, trigger is separated by spaces and miltumatch is separated by unlimited "," when are synchronic or ";" when are asynchronous.

can be used to match anything before or after the place. ? can be used to match anything exactly on that position with the same length.
fromAddress matches tx sender Address toAddress matches tx receiver Address tToken_Value matches tx Token with Valie bChain look for the tx in the blockchain Chain cN look for the above data in the N last txs

Actions specifications Functions called aN where N is matching the tN used for the correspondent Trigger.

To make this autonomous contracts work we need users to execute it and there is where the Reward functions comes, along with some read functions to let the users know if is the correct time to do so, this works as follows:

execute callReward (external payable); Runs the SC if is the correct time to do so and send the Reward amount to the senderAddress executing it and also refunds the gas fees (with a configured limit).

read maxGas; will tell the user the biggest amount of gas that the autonomous SC will refund on a Reward tx, if it is exceeded the user will lose some gas amount.

read Reward; will tell the user the reward amount to receive when he executes the contract on the correct time.

read Timelapse; will return if the contract is ready to execute or how much time is left to be ready to execute.

For the PoC we used Cartesi to code the SC and its functions.
