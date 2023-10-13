---
title: Cartenix
description:
  Proof of concept allowing you to run Nix builds inside the Cartesi Virtual
  Machine leveraging the Nix reproducible build system
thumbnail: 'H0y6JCx.png'
logo: 'H0Da4Np.png'
gallery:
  - image: 'projects_7xxe6_images_Screenshot 2023-05-13 alle 22.34.57.png'
  - image: 'projects_7xxe6_images_Screenshot 2023-05-13 alle 22.36.51.png'
  - image: 'projects_7xxe6_images_Screenshot 2023-05-13 alle 22.37.09.png'
  - image: 'projects_7xxe6_images_Screenshot 2023-05-13 alle 22.38.03.png'
tags:
  projectStage: Hackathon Project
  projectTypes:
    - Dev-Tool
  languages:
    - Python
  stacks_and_libraries:
    - Nix
links:
  website:
    - 'https://www.ethglobal.com/showcase/cartenix-7xxe6'
  github:
    - 'https://github.com/cartesi/rollups-examples/pull/21'
team:
  - name: Ivan Sala
    twitter: 'https://twitter.com/slavni96'
    discord: 'wonderdnal#5870'
  - name: Andrea Ciceri
    twitter: 'https://twitter.com/hornedSphere99'
    discord: 'zrsk#4984'
related:
  - decode
  - bravo
  - housy
---

## What is this?

Build reproducibility and trusting assets is a major problem in IT. By putting
NIX inside the Cartesi machine, we achieve both: builds are reproducible due to
the Cartesi Machine deterministic nature and the generated assets can be trusted
since anyone can dispute a wrongfully executed build.

## About cartenix

This proof of concept allows you to run Nix build inside the Cartesi virtual
machine.

We built Nix tools for riscv64 and installed them on the
cartesi/python:3.10-slim-jammy image in order to create a reproducible build of
a generic software given his depencencies. At the moment the docker image
depends on a specific package that we are going to build (GNU hello).

Since we don't have internet access inside the Cartesi VM we need to provide all
the (transitive) dependencies sources, using the nix terminology, we need to
provide all the fixed output derivations from the target derivation closure.

## How it's Made

This project used Cartesi VM and Nix Package system to leverage reproducible
build in a deterministic fashion environment.

We extended the riscv64 cartesi/python:3.10-slim-jammy docker image installing
Nix, starting from scratch compiling a brand new riscv64 Nix package, on it, and
defining a way to build a generic software in a way that is reproducible
providing all the fixed output derivations from the target derivation closure.

## More

[Project proposal](https://governance.cartesi.io/t/cartenix-run-nix-inside-cartesi/150/2)
