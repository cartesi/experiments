---
title: Ballaum worldcup betting DApp
description: Betting system for prediction of the world cup matches
logo: "https://iili.io/H0yrMxf.png"
thumbnail: "https://iili.io/H0yrMxf.png"
tags:
  projectStage: Proof of concept
  technology:
    - Cartesi Rollups
    - TypeScript
links:
  github:
    - "https://github.com/tuler/ballaum"
  demo: "https://ballaum.vercel.app/"
team:
  - name: Danilo Tuler
    linkedin: "https://www.linkedin.com/in/danilotuler/"
    twitter: "https://twitter.com/dtuler"
    discord: "tuler#8915"
---

# About Ballaum

A betting system for predictions of the world cup matches (or any sports event whatsoever, now that the world cup is near the end). It’s deployed to Goerli, and available at https://ballaum.vercel.app/

# Technical Details

Backend is developed in Typescript, transpiled and bundled to javascript by https://esbuild.github.io/, and executed with tjs - frontend is also developed in Typescript, and the NextJS framework.
As both the backend and frontend are Typescript I was able to share some code between them, like the way I encode and decode inputs.
I started to develop a typescript framework for developing Cartesi DApps, which I’m calling deroll. It may see the light of day as a framework, or not.

I developed a wallet module, and did the wallet UI, but it’s far from perfect. I’m not handling voucher execution yet.

For the web3 wallet I decided to experiment with https://wagmi.sh/ and https://www.rainbowkit.com/, it’s neat. - I used inspect api a lot, but not graphql yet, so UI feedback is not ideal yet.
