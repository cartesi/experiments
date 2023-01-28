---
title: DeCode
description: Decentralised Coding Platform
thumbnail: "https://iili.io/H0Da4Np.png"
logo: "https://iili.io/H0Da4Np.png"
gallery:
  - "https://assets.devfolio.co/hackathons/477fc44df3b94017b8b4bef44fca3cd7/projects/fefe7c58a84a44d7a4448286208193eb/3f64d2be-5dc6-4613-be1a-24fda1b7f675.png"
  - "https://assets.devfolio.co/hackathons/477fc44df3b94017b8b4bef44fca3cd7/projects/fefe7c58a84a44d7a4448286208193eb/1d2324fb-6af1-41ff-bfe3-352f9cd469f4.jpeg"
  - "https://assets.devfolio.co/hackathons/477fc44df3b94017b8b4bef44fca3cd7/projects/fefe7c58a84a44d7a4448286208193eb/0c5e417b-6702-4bb4-a3c7-a914b1bcc546.jpeg"
  - "https://assets.devfolio.co/hackathons/477fc44df3b94017b8b4bef44fca3cd7/projects/fefe7c58a84a44d7a4448286208193eb/79588968-4e19-402f-988f-452aae843007.jpeg"
  - "https://assets.devfolio.co/hackathons/477fc44df3b94017b8b4bef44fca3cd7/projects/fefe7c58a84a44d7a4448286208193eb/9117cf22-b71c-4fb7-814c-7d7d1c067b28.jpeg"
tags:
  hackathon: true
  winner: 4th Place
  event: ETH India
  projectStage: Hackathon Project
  technology:
    - Cartesi Rollups
    - Solidity
    - MongoDB
    - DigitalOcean
    - NextJS
    - Covalent
    - TailwindCSS
    - ENPS
links:
  website:
    - "https://devfolio.co/submissions/decode-f05d"
  github:
    - "https://github.com/0xVikasRushi/DeCode-ETHIndia"
team:
  - name: Vikas Rushi
    twitter: https://twitter.com/vikas_rushi
  - name: Deekshith Balmuri
    twitter: https://twitter.com/DeekshithRao7
  - name: Hitesh Lalwani
    linkedin: https://in.linkedin.com/in/hiteshlwni/
  - name: Shubh Chudasama
    linkedin: https://www.linkedin.com/in/c-shubh/
---

# About DeCode

We are bringing the Decentralized Coding Contest “De-Code” as an alternative to existing coding platforms such as codechef.com and codeforces.com, where the judging and ranking process is not transparent and cannot be trusted.

Since running a competitive coding platform involves high traffic and huge compute, it cannot be simply run on a smart contract. To overcome this and to get higher processing power at lower expenses we make use of the Cartesi Machine that provides the same level of security as the underlying blockchain but without compromising on the speed and languages supported (in fact, we used Javascript for writing the Cartesi code )

We also make use of Covalent for creating a leaderboard of people owning our token and push protocol for sending important notifications.

# Technical Details

Our platform uses the ELO Rating System for updating the ratings of the users after the contest ends. This can be compute intensive and expensive to run on a Solidity Smart Contract

We use the calc-u-rating npm package for the ELO Rating logic and then compile the code using webpack to create a single entry point (dist/main.js) to execute the app using tjs provided in the Cartesi Machine

### Cartesi Smart Contract

(deployed using echo-js demo in the rollups examples repository)

```
0x42f28Cbcd84c9Bc0aC9909e2AfC1fFcCeC27c39A
```

### Cartesi graphql api

(deployed on digitalocean droplet)

```
http://128.199.22.239:4000/graphql
```

# Videos

<iframe width="100%" height="440" src="https://www.youtube.com/embed/__f2-6bWnQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe width="100%" height="440" src="https://www.youtube.com/embed/-ddgjx9QC_A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
