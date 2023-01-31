---
title: Frmandy
description: A fully on-chain NFT mint using Cartesi and Ethereum smart contracts
logo: "https://iili.io/H0t7nyB.jpg"
thumbnail: "https://iili.io/H0t7nyB.jpg"
gallery:
  - "https://storage.googleapis.com/ethglobal-api-production/projects%2Fv1gr8%2Fimages%2Fcli-example-1.jpg"
  - "https://storage.googleapis.com/ethglobal-api-production/projects%2Fv1gr8%2Fimages%2FScreenshot%20from%202022-10-09%2014-34-24.png"
tags:
  projectStage: Hackathon Project
  event: ETH Bogota
  winner: 1st Place
  technology:
    - Cartesi Rollups
    - Rust
links:
  website:
    - "https://ethglobal.com/showcase/frmandy-v1gr8"
  github:
    - "https://github.com/Frmandy"
    - "https://github.com/cartesi/rollups-examples/pull/17"
team:
  - name: Maxim Legg
    twitter: "http://twitter.com/maximlegg"
    discord: "maxim#3615"
  - name: Fran Novo
    twitter: "http://twitter.com/frank_novo"
    discord: "Fran Novo#9984"
  - name: Andy Thomason
    twitter: "http://twitter.com/quaternioso"
    discord: "andy-thomason#0510"
---

# About Frmandy

Cartesi is designed for doing computation off-chain that would otherwise be difficult in the EVM. A Mandelbrot set is a classic example.

Although we could generate a Madelbrot set escape time plot in the EVM, writing the resulting PNG file would be a challenge.

In this hypothetical example, we make a NFT that sells off portions of the set such as "seahorse valley" (--0.75:0.1:10.0) to collectors.

In an ideal scenario, we could use Cartesi to write a file to IPFS and publish the URL on the chain by use of Cartesi's unique voucher system.

# Technical Details

We used the Cartesi framework to add Rust code to the Ethereum network.

Rust is the ideal language for these computational loads having a good degree of stability and an established set of libraries such as the PNG library used in this example.

The core code of this contract is as follows:

```
fn escape_time(cx: f64, cy: f64) -> u8 { let mut zx = cx; let mut zy = cy; let mut res = 0; loop { (zx, zy) = (zxzx - zyzy + cx, 2.0zyzx + cy ); if zxzx + zyzy > 4.0 || res == 255 { return res; } res += 1; } }
```

We give three parameters to the contract: x, y and zoom. This determines the generated image.

In a more complex example, we could composite SVG images to create mutations of comic book characters or sell off images of plots of land on Mars.

There is a small demo UI which interacts with the emulator directly as testing the smart contracts end to end was a challenge given the many moving parts. Hopefully this demonstrates the core concepts. Next step would be to deploy to the chain.
