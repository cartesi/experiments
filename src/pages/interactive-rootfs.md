---
title: Interactive rootfs
description:
  Interactive rootfs is a tooling focused project to improve iteration times of
  DApp development and filesystem construction by providing an incremental way
  of adding files and packages to the system.
thumbnail: 'interactive-rootfs.png'
logo: 'interactive-rootfs.png'
tags:
  projectStage: In progress - Alpha
  other_tags:
    - 'Cartesi Experiment Week'
  projectTypes:
    - Dev-Tool
  languages:
    - Bash
  stacks_and_libraries:
    - Docker
links:
  github:
    - 'https://github.com/mpolitzer/sdk'
team:
  - name: Marcelo Politzer
    discord: 'marcelo.politzer'

related:
  - bravo
  - bugless
  - liquidator
---

## About Interactive rootfs

SDK is a set of scripts to aid in cross compilation and interactive disk image
construction. It bundles multiple tools together to ease the development of
DApps. It also provides a way to run riscv executables without having to bundle
them into a image in an attempt to improve iteration cycles.

## Describe what could be next for your project?

A port of the system to MacOS/ARM architecture. The inclusion of the Ref Node
stack into the bundle could also improve the developer experience by enabling
him to mock the blockchain side of his DApp.
