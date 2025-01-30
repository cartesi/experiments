---
title: Frmandy
description: On-Chain NFT Minting with Cartesi and Ethereum Smart Contracts
logo: 'H0t7nyB.jpg'
thumbnail: 'H0t7nyB.jpg'
gallery:
  - image: 'projects%2Fv1gr8%2Fimages%2Fcli-example-1.jpg'
    alt: Frmandy code snippet | Built with Cartesi Rollups
  - image: 'projects%2Fv1gr8%2Fimages%2FScreenshot%20from%202022-10-09%2014-34-24.png'
    alt: Frmandy mint configuration | Built with Cartesi Rollups
tags:
  projectStage: Hackathon Project
  event: ETH Bogota
  winner: 1st Place
  technology:
    - Rust
links:
  website: 'https://ethglobal.com/showcase/frmandy-v1gr8'
  github:
    - 'https://github.com/Frmandy'
    - 'https://github.com/cartesi/rollups-examples/pull/17'
team:
  - name: Maxim Legg
    twitter: 'http://twitter.com/maximlegg'
    discord: 'maxim#3615'
  - name: Fran Novo
    twitter: 'http://twitter.com/frank_novo'
    discord: 'Fran Novo#9984'
  - name: Andy Thomason
    twitter: 'http://twitter.com/quaternioso'
    discord: 'andy-thomason#0510'
---

## About Frmandy

Frmandy is an experimental project showcasing the use of
[Cartesi](https://cartesi.io/) to perform computations off-chain, which would be
difficult to accomplish within the
[Ethereum Virtual Machine (EVM)](https://ethereum.org/en/developers/docs/evm/).
The project focuses on generating
[Mandelbrot sets](https://en.wikipedia.org/wiki/Mandelbrot_set), a classic
example of complex computations, and minting them as NFTs for collectors.

By leveraging Cartesi, it is possible to generate a Mandelbrot set escape time
plot and write the resulting PNG file—an otherwise challenging task within the
EVM. Ideally, Frmandy could use Cartesi to write a file to IPFS and publish the
URL on the blockchain through Cartesi's unique voucher system. This would allow
selling off portions of the set, such as "seahorse valley" (--0.75:0.1:10.0), to
interested collectors.

## Technical Details

Frmandy utilizes the Cartesi framework to incorporate
[Rust](https://www.rust-lang.org/learn) code into the Ethereum network. Rust is
an ideal language for handling computational loads, offering stability and a
robust set of libraries, such as the PNG library used in this project.

The core code of the smart contract is as follows:

```
fn escape_time(cx: f64, cy: f64) -> u8 {
  let mut zx = cx;
  let mut zy = cy;
  let mut res = 0;
  loop {
    (zx, zy) = (zx * zx - zy * zy + cx, 2.0 * zy * zx + cy);
    if zx * zx + zy * zy > 4.0 || res == 255 {
        return res;
    }
    res += 1;
  }
}
```

This contract receives three parameters: x, y, and zoom, which determine the
generated image. In more advanced examples, the project could composite SVG
images to create variations of comic book characters or sell images representing
plots of land on Mars.

A small demo UI is provided to interact directly with the emulator, as testing
the smart contracts end-to-end proved challenging due to the many moving parts.
Although not yet deployed on the blockchain, this demo showcases the core
concepts and potential of the project.

Frmandy's pull request text provides an example generation payload:

`yarn start input send --payload "(-0.75:0.1:10.0)"`

A PNG image generated from this payload would challenge the execution
performance and determinism of the VM. In an ideal world, images generated using
the same parameters should be identical.
